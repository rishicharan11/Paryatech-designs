# Governance

Figma variables define values/aliases; Zeroheight exports `Tokens/` and `CSS/`; repository docs define intent; product code consumes semantic/component tokens.

## Change levels

- Patch: correction/value adjustment without API change.
- Minor: additive semantic token, mode, or component variant.
- Major: rename, removal, meaning/layer change, or required migration.

## PR checklist

- Explain the product problem and confirm the Figma source change.
- Include affected themes, densities, and contexts.
- Regenerate references and validate.
- Search consumers for renamed/removed tokens.
- Include before/after evidence.
- Update guidance when intent changes.
- Provide migration/deprecation guidance for breaking changes.

New components need anatomy, content, behavior, states, accessibility, responsive rules, tokens, examples, anti-examples, and ownership before approval.

