# Implementation Plan: Credit-based usage and billing system

**Branch**: `005-implement-a-credit` | **Date**: 2025-11-19 | **Spec**: `specs/005-implement-a-credit/spec.md`  
**Input**: Feature specification from `/specs/005-implement-a-credit/spec.md`

## Execution Flow (/plan command scope)
```text
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file
   → Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phase 2 and later are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

---

## Summary

The "credit-based usage and billing system" feature introduces a unified
credit model on top of the existing Fresquia web application (Node/Express
backend + React/TypeScript frontend).

Each authenticated user has:
- A **credit balance**, initialized to **50 free credits** at first use.
- Aggregated usage counters for:
  - total images generated
  - total cards generated
  - total collections saved
  - total PDFs exported
  - total credits spent

Credits are consumed by three main operations:
- **Image generation** (initial card generation or single image
  regeneration): `creditsRequired = ceil(imageCount / 8)`.
- **Collection save**: `creditsRequired = ceil(cardsCount * (10 / 52))`.
- **PDF export**: free up to and including 16 cards, and 2 credits for
  exports with more than 16 cards.

If the user does not have enough credits, the corresponding operation is
blocked and no external cost is incurred (no images, no save, no PDF).
All credit changes are recorded in a **credit_transactions** log with
source and structured payload. For this feature, users can receive
additional credits only via **manual adjustments by an administrator**.

The plan below describes how to integrate this credit system in the
existing backend (SQLite-based LocalDatabaseService, collections and
cards APIs), expose minimal APIs for admin adjustments and user-facing
usage views, and update the frontend to display balances and errors.

---

## Technical Context

**Language/Version**:  
- Backend: Node.js (Express, CommonJS)  
- Frontend: TypeScript + React + Vite

**Primary Dependencies**:  
- Backend: Express, sqlite3 (LocalDatabaseService), Puppeteer +
  @sparticuz/chromium-min (PDFService), Stability AI HTTP API client
  (via fetch/axios-style calls), Cloudflare R2 SDK/wrapper.  
- Frontend: React, React Router, MUI, context-based state management.

**Storage**:  
- Primary: SQLite database managed through `LocalDatabaseService.js`
  (tables `users` and `collections`).  
- Binary assets: Cloudflare R2 for card images (already integrated).

**Testing**:  
- Backend: existing Node test setup (`backend/tests/*.test.js`).  
- Frontend: existing React test stack if present (not expanded in this
  plan; focus remains on backend behaviour and a small amount of manual
  verification via quickstart).

**Target Platform**:  
- Backend: Node.js service deployed (e.g. on Render or Cloudflare
  Worker-compatible environment, according to existing repo setup).  
- Frontend: Browser-based SPA served by Vite build.

**Project Type**:  
- Web application with separate `backend/` and `frontend/` projects.

**Performance Goals**:  
- Credit checks and updates must add **negligible latency** compared to
  existing API operations (simple SQLite lookups + updates).  
- No additional external round-trips beyond current image/PDF services.

**Constraints**:  
- Reuse the existing **SQLite schema and LocalDatabaseService** pattern.  
- Avoid introducing new infrastructure (no new databases or billing
  services) in this feature.  
- Ensure that credit spending and database writes are designed so that
  users cannot overspend credits even under concurrent requests.

**Scale/Scope**:  
- Initial scope compatible with a single SQLite instance and moderate
  concurrency. Future scaling (e.g. external billing, sharded storage)
  is explicitly out of scope for this feature.

---

## Constitution Check

The current `.specify/memory/constitution.md` file contains only
placeholder sections without concrete, enforced principles. There are no
explicit constitutional constraints regarding architecture, technology
choices, or process beyond the general guidance already followed in this
repository.

Within that context, this plan:
- Keeps the design **simple** (single DB, reuse of LocalDatabaseService).
- Keeps changes **localized** to credit logic, without re-architecting
  existing flows.
- Preserves testability by planning clear places to add unit and
  integration tests for credit behaviour.

**Initial Constitution Gate**: PASS (no violations detected).  
**Post-Design Constitution Gate**: PASS (feature remains within
constraints and avoids unnecessary complexity).

---

## Project Structure

### Documentation (this feature)
```text
specs/005-implement-a-credit/
├── spec.md       # Feature specification (/specify, already created)
├── plan.md       # This file (/plan output)
├── research.md   # Phase 0 output (/plan)
├── data-model.md # Phase 1 output (/plan)
├── quickstart.md # Phase 1 output (/plan)
├── contracts/    # Phase 1 output (/plan)
└── tasks.md      # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   │   ├── cards.js          # card generation + PDF for unsaved cards
│   │   ├── collections.js    # collection CRUD + collection PDF export
│   │   └── auth.js           # auth endpoints (if used)
│   ├── middleware/
│   │   └── auth.js           # Firebase-based auth middleware
│   ├── models/
│   │   ├── Card.js
│   │   └── CardCollection.js
│   └── services/
│       ├── LocalDatabaseService.js # SQLite access, users + collections
│       ├── PdfService.*.js         # PDF rendering
│       ├── R2Service.js            # image upload
│       └── AuthService.js          # token verification
└── tests/
    ├── api.test.js
    ├── models.test.js
    └── services.test.js

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   ├── types/
│   └── assets/
└── tests/ (if/when needed)
```

**Structure Decision**:  
Use the existing **web application** split: `backend/` for all server
logic (including the credit engine, DB schema updates, and admin/user
APIs), and `frontend/` for UI surfaces (displaying credit balances,
usage summaries, and error messages when credits are insufficient).

All credit-related persistence and enforcement will live in
`LocalDatabaseService.js` and the relevant API routes under
`backend/src/api/`, with minimal, non-invasive changes elsewhere.

---

## Phase 0: Outline & Research (research.md)

Goals:
- Confirm the safest way to **extend the SQLite schema** managed by
  `LocalDatabaseService.js` (adding new columns to `users` and creating
  `credit_transactions` without breaking existing data).
- Review concurrency semantics of SQLite writes in the current
  environment to ensure that credit debits and business operation
  results appear atomic from the user perspective.
- Review existing **auth and roles** model to identify how
  administrator-only endpoints (manual credit adjustments and
  transaction views) will be protected.

Expected contents of `research.md`:
- Decisions about:
  - Exact columns to add to `users` (credit balance and usage counters).
  - Exact schema for `credit_transactions` (fields and indices).
  - How to structure functions in `LocalDatabaseService` to perform
    atomic read/modify/write sequences for credits + usage.
  - How to mark or detect **admin users** (e.g., configuration-based
    list of admin UIDs, or a flag in the users table).
- Rationale for choosing the inline SQLite approach vs. an external
  billing/metrics service at this stage.
- Notes on how to keep migrations **idempotent** and safe across
  deployments.

Status: `research.md` has been generated by /plan and should capture the
above decisions at a high level.

---

## Phase 1: Design & Contracts (data-model.md, contracts/, quickstart.md)

### Data Model (data-model.md)

Design the conceptual data model for:

- **User Account (extension)**
  - Add fields (conceptually) for:
    - `creditsBalance: integer`
    - `totalImagesGenerated: integer`
    - `totalCardsGenerated: integer`
    - `totalCollectionsSaved: integer`
    - `totalPdfsExported: integer`
    - `totalCreditsSpent: integer`
    - `lastActivityAt: datetime` (optional)
  - Keep existing identity and timestamps.

- **Credit Transaction**
  - New entity linked to a user:
    - `id: string` (unique identifier)
    - `userId: string` (FK to user)
    - `type: "earn" | "spend" | "adjust"`
    - `source: string` (e.g. `image_generation`, `collection_save`,
      `pdf_export`, `admin_grant`)
    - `credits: integer` (positive or negative)
    - `payload: JSON` (cardsCount, collectionId, notes...)
    - `createdAt: datetime`

- **Relationships**
  - User has many CreditTransactions.  
  - Existing relations to Collections and Cards remain unchanged;
    credit logic references collection IDs and counts but does not
    change their schema in this feature.

`data-model.md` describes these entities, their attributes and
relationships without prescribing the low-level SQLite schema (which is
handled in LocalDatabaseService).

### API Contracts (contracts/)

Define minimal REST-style contracts for:

- **User-facing usage summary**
  - `GET /api/users/me/usage`
    - Authenticated user.  
    - Response: current credit balance and aggregated usage counters.

- **Admin credit adjustment**
  - `POST /api/admin/users/{userId}/credits/adjust`
    - Admin-only.  
    - Request body: `{ "delta": number, "source": string, "reason": string }`  
      (`delta` may be positive or negative; this will create a
      `credit_transactions` entry of type `adjust` or `earn/spend`
      depending on sign.)
    - Response: updated usage summary for the target user.

- **Admin view of credit transactions**
  - `GET /api/admin/users/{userId}/credit-transactions`
    - Admin-only.  
    - Query params for pagination (e.g. `?limit=&offset=`) may be added.  
    - Response: list of credit transactions for the user.

These contracts are described in
`specs/005-implement-a-credit/contracts/credits-api.openapi.yaml` as a
lightweight OpenAPI-style document.

### Quickstart (quickstart.md)

Provide a minimal recipe to manually validate the feature end-to-end in
a development environment:

1. Start backend and frontend using the existing scripts.
2. Log in as a regular user (or use the dev fallback user ID) and
   confirm the initial 50-credit balance via `GET /api/users/me/usage`
   and the frontend UI.
3. Generate a known number of cards/images and verify that:
   - Credits are decremented with the formula `ceil(imageCount / 8)`.  
   - Usage counters and transactions are updated.
4. Save collections of various sizes (e.g. 10 cards, 26 cards, 52
   cards) and verify that:
   - Credits are decremented using
     `ceil(cardsCount * (10 / 52))`.  
   - Saves are blocked when the user does not have enough credits.
5. Export PDFs for small (≤16) and larger (>16) card sets and verify
   that:
   - Small PDFs are free.  
   - Larger PDFs cost 2 credits and are blocked if credits are
     insufficient.
6. As an admin, call `POST /api/admin/users/{userId}/credits/adjust` to
   add and subtract credits, and verify that:
   - The user's balance and `credit_transactions` log update
     accordingly.  
   - Only admins can call these endpoints.

`quickstart.md` captures those steps in more detail so that testers and
future contributors can quickly exercise the feature.

### Agent Context Update

Run the following once (already executed by /plan when needed):
```powershell
.specify/scripts/powershell/update-agent-context.ps1 -AgentType windsurf
```
This keeps the AI assistant context in sync with the new feature
artifacts without exceeding size limits.

---

## Phase 2: Task Planning Approach (for /tasks)

The `/tasks` command will use `spec.md`, `plan.md`, `research.md`,
`data-model.md`, `quickstart.md` and the API contracts to generate an
ordered `tasks.md`. The strategy will be:

- **Database & persistence first**
  - Tasks to extend `LocalDatabaseService` schema (users table +
    credit_transactions table) and add helper functions for
    `getOrCreateUserAccount`, credit debiting, and transaction logging.

- **Backend credit enforcement**
  - Tasks to integrate credit checks and updates into:
    - image generation flows in `cards.js` / Gemini service.  
    - collection save in `collections.js`.  
    - PDF exports in `collections.js` and `cards.js`.

- **Admin & user APIs**
  - Tasks to implement `GET /api/users/me/usage`, the admin adjustment
    endpoint, and the admin transaction listing endpoint.

- **Frontend integration**
  - Tasks to surface credit balance and aggregated stats in the UI and
    to display clear error messages when actions are blocked due to
    insufficient credits.

- **Testing**
  - Tasks to add unit and integration tests in `backend/tests` to
    validate all formulas and enforcement rules for credits.

Ordering strategy:
- DB and service-layer changes **before** API and UI wiring.  
- Tests added alongside or before implementation for each unit of
  behaviour where practical.

---

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| *(none)*  | N/A        | N/A                                   |

At this stage, no deviations from a simple, localized design are
required. All changes are incremental on top of existing services.

---

## Progress Tracking

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)  
- [x] Phase 1: Design complete (/plan command)  
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)  
- [ ] Phase 3: Tasks generated (/tasks command)  
- [ ] Phase 4: Implementation complete  
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS  
- [x] Post-Design Constitution Check: PASS  
- [x] All NEEDS CLARIFICATION resolved for this feature  
- [ ] Complexity deviations documented (not needed yet)

---
*Based on current constitution template in `.specify/memory/constitution.md`*
