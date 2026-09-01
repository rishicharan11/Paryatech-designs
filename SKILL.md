---
name: paryatech-design-system
description: Design, review, or implement ParyatechOS interfaces using this repository's approved tokens, product intent, and component patterns. Use for Paryatech UI work, not general visual styling.
---

# Paryatech Design System

Treat this repository as the constraint source for ParyatechOS UI. Preserve product intent, use published semantic tokens, and reuse approved patterns before proposing additions.

## Required context

Read `product.md`, `design.md`, and the relevant file under `docs/foundations/` or `docs/components/`. For token work also read `docs/architecture/token-architecture.md`; for Figma/Zeroheight changes read `docs/architecture/governance.md`.

## Workflow

1. Identify the workflow, user role, state, and target viewport.
2. Inspect existing components and semantic tokens before creating UI.
3. Bind to `Color.*`, `Typography.*`, `Spacing.*`, `Sizing.*`, and other semantic aliases—never `Core.*` primitives.
4. Make status, ownership, risk, and next action clear.
5. Cover relevant interaction, loading, empty, error, success, responsive, theme, and density states.
6. Validate accessibility and consistency with an existing pattern.
7. Report reused tokens/components. Label missing items as proposals instead of silently inventing them.

## Hard constraints

- Do not hand-edit `Tokens/`, `CSS/`, or generated `tokens/*.json`.
- Do not invent raw colors, spacing, radii, type sizes, shadows, or breakpoints.
- Do not create a near-duplicate component when a variant or composition works.
- Do not use color alone for status.
- Do not expose internal cost, margin, supplier, or operational data in customer-facing views.
- Do not replace Paryatech workflows with generic SaaS patterns.
- Do not call a pattern approved without repository or linked Figma evidence.

When the system has a gap, document the use case, nearest existing option, proposed role/variant, affected modes/states, and migration impact. For new components use `docs/components/component-guidelines.md`.

