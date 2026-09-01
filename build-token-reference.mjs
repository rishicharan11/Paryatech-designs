import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseline = 'Tokens/Default_Light_StandardDesktop.tokens.json';
const source = JSON.parse(await readFile(path.join(root, baseline), 'utf8'));
const modes = (await readdir(path.join(root, 'Tokens'))).filter((n) => n.endsWith('.tokens.json')).sort();

function count(v) {
  if (!v || typeof v !== 'object') return 0;
  if (Object.hasOwn(v, '$value')) return 1;
  return Object.values(v).reduce((sum, child) => sum + count(child), 0);
}
async function emit(name, data) {
  await writeFile(path.join(root, 'tokens', name), `${JSON.stringify(data, null, 2)}\n`);
}
const semantic = Object.fromEntries(Object.entries(source).filter(([k]) => k !== 'Core' && k !== '$extensions'));

await emit('primitives.json', { '$metadata': { derivedFrom: baseline, layer: 'primitive', generated: true }, Core: source.Core });
await emit('semantic.json', { '$metadata': { derivedFrom: baseline, layer: 'semantic-and-component', generated: true }, ...semantic });
await emit('semantic-typography.json', { '$metadata': { derivedFrom: baseline, layer: 'semantic-typography', generated: true }, Typography: source.Typography });
await emit('manifest.json', {
  '$schema': './manifest.schema.json', generated: true, baseline, modes,
  namespaces: Object.keys(source).filter((k) => k !== '$extensions'),
  counts: { all: count(source), primitive: count(source.Core), semanticAndComponent: count(semantic), semanticTypography: count(source.Typography) }
});
console.log(`Generated token references from ${baseline}`);

