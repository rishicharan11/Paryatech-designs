import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'Tokens');
const files = (await readdir(dir)).filter((n) => n.endsWith('.tokens.json')).sort();
const required = ['Core', 'Color', 'Typography', 'Spacing', 'Sizing', 'Radius', 'Border', 'Responsive', 'Icon Context', 'Opacity & Focus'];
const errors = [];

function collect(v, parts = [], out = new Map(), inheritedType) {
  if (!v || typeof v !== 'object') return out;
  const effectiveType = v.$type ?? inheritedType;
  if (Object.hasOwn(v, '$value')) {
    out.set(parts.join('.'), { ...v, $effectiveType: effectiveType });
    return out;
  }
  for (const [k, child] of Object.entries(v)) {
    if (!k.startsWith('$')) collect(child, [...parts, k], out, effectiveType);
  }
  return out;
}

for (const file of files) {
  let source;
  try { source = JSON.parse(await readFile(path.join(dir, file), 'utf8')); }
  catch (e) { errors.push(`${file}: invalid JSON (${e.message})`); continue; }
  for (const ns of required) if (!source[ns]) errors.push(`${file}: missing namespace ${ns}`);
  const tokens = collect(source);
  for (const [name, token] of tokens) {
    const alias = typeof token.$value === 'string' ? token.$value.match(/^\{(.+)\}$/) : null;
    if (!token.$effectiveType && !alias) errors.push(`${file}: concrete token ${name} has no own or inherited $type`);
    if (typeof token.$value === 'string') {
      if (alias && !tokens.has(alias[1])) errors.push(`${file}: ${name} references missing ${alias[1]}`);
    }
  }
}
for (const fragment of ['Dark_CompactDesktop', 'Dark_StandardDesktop', 'Dark_WideDesktop', 'Light_CompactDesktop', 'Light_StandardDesktop', 'Light_WideDesktop']) {
  if (!files.some((f) => f.includes(fragment))) errors.push(`Missing required mode ${fragment}`);
}
if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  errors.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}
console.log(`Validated ${files.length} token files: namespaces, modes, types, and aliases.`);
