# ParyatechOS product intent

ParyatechOS is digital infrastructure for modern travel businesses. It replaces spreadsheets, manual follow-ups, disconnected tools, and unclear handoffs with one operating system for travel agencies and tour operators.

## Core workflow

**Query → Proposal → Booking → Operations → Finance**

A design succeeds when it makes this workflow easier to understand, hand off, and act on—not merely when it looks polished.

## Users

- **Agency owner:** business health, cash, risk, team workload, exceptions.
- **Admin/manager:** ownership, approvals, handoffs, operational visibility.
- **Team member:** assigned work, customer context, deadlines, next actions.
- **Paryatech super admin:** tenant/platform oversight without cross-tenant leakage.
- **Traveler/customer:** selected external experiences; never internal commercial data.

Modules include CRM, Queries, Proposals, Bookings, Finance, Operations, Automations, Marketing, collaboration, and reporting.

## UX priorities

1. Make ownership and next action obvious.
2. Preserve context across handoffs.
3. Surface exceptions and risk before passive totals.
4. Keep money, dates, statuses, and identifiers scannable.
5. Separate internal from customer-visible information.
6. Prefer progressive disclosure.
7. Use safe defaults and confirmation for consequential actions.

## Domain invariants

- Each new trip starts as a new query, including returning customers.
- A proposal is itinerary plus sales document; acceptance creates a booking.
- Accepted proposal versions are locked; later changes need versioning.
- Finance is booking-led and links receivables, payables, and profit.
- Ownership filters are **Mine**, **Unassigned**, and **All**.
- Booking states are **Needs action**, **Upcoming**, **Travelling**, and **Completed** until intentionally migrated.
- Internal costs, suppliers, margin, and operational notes are not customer-visible by default.

Voice is direct, calm, and operational: short labels, familiar travel language, specific actions; no hype or vague status copy.

