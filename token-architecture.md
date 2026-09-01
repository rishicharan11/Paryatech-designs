# Token architecture

Exports use DTCG-style `$value`, `$type`, and `$description`, with Zeroheight/Figma metadata under `$extensions`.

| Layer | Namespace | Use |
|---|---|---|
| Primitive | `Core.*` | Raw palettes/scales; never bind product UI |
| Semantic | `Color.*`, `Typography.*`, `Spacing.*`, `Radius.*`, `Border.*`, `Sizing.*`, `Responsive.*`, `Opacity & Focus.*`, `Icon Context.*` | Intent-based product roles |
| Component | e.g. `Spacing.Component.*`, `Sizing.Table.*`, `Radius.Component.*` | Matching shared component |

Aliases flow component → semantic → Core. Avoid cycles and appearance-based semantic names. File names encode theme, density, and sometimes context; use a complete matching mode rather than arbitrary cross-mode merging.

`node scripts/build-token-reference.mjs` derives `tokens/primitives.json`, `semantic.json`, `semantic-typography.json`, and `manifest.json` from the Light/Standard baseline. They are inspection views, not a second source of truth.

**CSS warning:** current CSS exports contain unitless numeric properties. Consumers must apply suitable units or configure the exporter to emit them; do not assume spacing variables are directly valid CSS lengths.

