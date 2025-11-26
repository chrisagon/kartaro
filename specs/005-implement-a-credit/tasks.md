# Tasks: Credit-based usage and billing system

**Input**: Design documents from `specs/005-implement-a-credit/`  
**Prerequisites**: `plan.md` (required), `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

## Execution Flow (main)
```text
1. Load plan.md from feature directory
   → Extract: tech stack, structure (backend + frontend), key flows
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test + endpoint tasks
   → research.md: Extract decisions → DB + admin tasks
   → quickstart.md: Extract scenarios → integration test tasks
3. Generate tasks by category:
   → Setup: env/config & doc updates
   → Tests: contract tests, unit tests, integration tests
   → Core: DB schema, services, endpoints, credit logic
   → Integration: wiring with frontend + error UX
   → Polish: docs & manual verification
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Define dependencies and parallel execution examples
7. Validate task completeness:
   → All contracts have tests and endpoints
   → All entities have model / persistence tasks
   → All critical user journeys have integration tests
8. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Task can run in parallel with other [P] tasks (different files, no dependencies)
- Always include exact file paths in descriptions

## Path Conventions (from plan.md)

- Backend code: `backend/src/`  
  - APIs: `backend/src/api/`  
  - Services / DB: `backend/src/services/`  
  - Middleware: `backend/src/middleware/`  
  - Tests: `backend/tests/`
- Frontend code: `frontend/src/`  
  - Services: `frontend/src/services/`  
  - Context: `frontend/src/context/`  
  - Pages: `frontend/src/pages/`

---

## Phase 3.1: Setup

- [ ] **T001** Update environment examples and docs for admin configuration  
  Add an `ADMIN_USER_IDS` example and a short description of the credit-based
  system to `./.env.example` and the root `./README.md` so that developers know
  how to configure administrator accounts and how credits work at a high level.

- [ ] **T002 [P]** Document how to run backend credit-related tests  
  Extend `./QUICK_TEST_GUIDE.md` or `./backend/README.md` (whichever is
  currently used for test docs) to include commands and brief explanation for
  running the new credit-related backend tests in `backend/tests/`.

---

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

> These tests MUST be written and MUST FAIL before any implementation work in
> the corresponding code paths.

- [ ] **T003 [P]** Unit tests for credit pricing formulas  
  Create `backend/tests/credits.rules.test.js` with unit tests for the pure
  pricing helpers:  
  - `creditsRequiredForImages(imageCount) = ceil(imageCount / 8)`  
  - `creditsRequiredForCollectionSave(cardsCount) = ceil(cardsCount * (10 / 52))`  
  - `creditsRequiredForPdf(cardsCount) = 0 if cardsCount <= 16 else 2`  
  Cover edge cases: `0, 1, 8, 9, 16, 17, 52`.

- [ ] **T004 [P]** Tests for DB schema and credit persistence  
  Create `backend/tests/credits.db.test.js` to verify that
  `LocalDatabaseService` correctly:  
  - Creates/extends the `users` table with credit and usage columns.  
  - Creates the `credit_transactions` table and index.  
  - Exposes helper(s) to retrieve and update user usage/credits atomically.  
  Use a temporary SQLite DB or the existing test DB pattern.

- [ ] **T005 [P]** Contract tests for `GET /api/users/me/usage`  
  Create `backend/tests/credits.userUsage.api.test.js` with tests asserting
  the contract defined in `contracts/credits-api.openapi.yaml` for
  `GET /api/users/me/usage`:  
  - 200 response shape (`creditsBalance`, totals).  
  - 401/403 behaviour when auth is missing/invalid (depending on existing
    conventions).

- [ ] **T006 [P]** Contract tests for admin credit adjust and transaction APIs  
  Create `backend/tests/credits.admin.api.test.js` with tests for:  
  - `POST /api/admin/users/{userId}/credits/adjust` (success for admin,
    forbidden for non-admin).  
  - `GET /api/admin/users/{userId}/credit-transactions` (list shape,
    pagination basics, forbidden for non-admin).  
  Use the OpenAPI contracts in
  `specs/005-implement-a-credit/contracts/credits-api.openapi.yaml` as source
  of truth.

- [ ] **T007 [P]** Integration tests for credit enforcement flows  
  Create `backend/tests/credits.integration.test.js` with end-to-end-style
  tests covering scenarios from `quickstart.md`:  
  - Image generation consumes `ceil(imageCount / 8)` credits and is blocked
    when credits are insufficient.  
  - Collection save consumes `ceil(cardsCount * (10 / 52))` credits and is
    blocked when credits are insufficient.  
  - PDF export is free for `cardsCount <= 16` and costs 2 credits for
    `cardsCount > 16`; large exports are blocked when credits are
    insufficient.  
  - Aggregated usage counters and `credit_transactions` entries are updated
    correctly for successful operations.

---

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### 3.3.1 Database & services

- [ ] **T008** Extend SQLite schema for credits and usage in `LocalDatabaseService`  
  In `backend/src/services/LocalDatabaseService.js`, extend `initializeSchema()`
  to:  
  - Add credit/usage columns to `users` (`credits_balance`,
    `total_images_generated`, `total_cards_generated`,
    `total_collections_saved`, `total_pdfs_exported`, `total_credits_spent`,
    `last_activity_at`) using `ALTER TABLE ... ADD COLUMN` with duplicate
    column checks.  
  - Create a `credit_transactions` table with the fields and index described
    in `research.md`.

- [ ] **T009** Implement credit usage helpers in `LocalDatabaseService`  
  Still in `backend/src/services/LocalDatabaseService.js`, add helpers such as:  
  - `getUserUsage(userId)` or equivalent to read current balance and counters.  
  - `applyCreditChangeAndUsage(userId, deltas, transactionMetadata)` to
    atomically:  
    - verify that `credits_balance` is sufficient for the requested spend,  
    - update balance and usage counters,  
    - insert a `credit_transactions` row,  
    - update `last_activity_at`.  
  Ensure this helper returns a clear error (e.g. with a code that callers can
  map to `INSUFFICIENT_CREDITS`).

- [ ] **T010 [P]** Implement pure credit rules helper  
  Create `backend/src/services/CreditService.js` (or similar) that exports
  pure functions implementing the three pricing rules: image, collection save,
  and PDF export. Use this module in API routes and in the tests from
  `backend/tests/credits.rules.test.js`.

### 3.3.2 Credit enforcement in existing flows

- [ ] **T011** Enforce credits in image generation flows  
  Update `backend/src/api/cards.js` (and, if necessary,
  `backend/src/services/GeminiService.js`) to:  
  - Determine `imageCount` for the requested operation.  
  - Use `CreditService` to compute `creditsRequiredForImages(imageCount)`.  
  - Call `applyCreditChangeAndUsage` before invoking Stability AI.  
  - If credits are insufficient, return a standardized error
    `{ error: 'Not enough credits', code: 'INSUFFICIENT_CREDITS' }` and do
    **not** call the external image service.  
  - On success, ensure usage counters and transactions are recorded via the
    helper only once.

- [ ] **T012** Enforce credits on collection save  
  Update `backend/src/api/collections.js` in the `POST /api/collections`
  handler to:  
  - Compute `cardsCount` from the submitted collection.  
  - Use `CreditService` to compute
    `creditsRequiredForCollectionSave(cardsCount)`.  
  - Call `applyCreditChangeAndUsage` before actually persisting the
    collection.  
  - If credits are insufficient, return the standardized
    `INSUFFICIENT_CREDITS` error and do not save the collection.  
  - Ensure that the collection save and credit update behave atomically from
    the user perspective.

- [ ] **T013** Enforce credits on PDF exports  
  Update PDF export endpoints:  
  - `GET /api/collections/:id/pdf` in `backend/src/api/collections.js`.  
  - `POST /api/cards/generate-pdf` in `backend/src/api/cards.js`.  
  For each, determine `cardsCount`, compute `creditsRequiredForPdf(cardsCount)`
  using `CreditService`, and:  
  - Allow export with `creditsRequired = 0` without changing the credit
    balance, but increment `totalPdfsExported`.  
  - For `creditsRequired = 2`, call `applyCreditChangeAndUsage` to spend
    credits and log a transaction before generating the PDF.  
  - If credits are insufficient, return the standardized
    `INSUFFICIENT_CREDITS` error and skip PDF generation.

### 3.3.3 User and admin APIs

- [ ] **T014** Implement `GET /api/users/me/usage` endpoint  
  Add a new router file (e.g. `backend/src/api/users.js`) that exposes
  `GET /api/users/me/usage`:  
  - Use `authMiddleware` to obtain `req.user.uid`.  
  - Call `getUserUsage` / equivalent helper from `LocalDatabaseService`.  
  - Return a JSON payload conforming to the `UsageSummary` schema in
    `contracts/credits-api.openapi.yaml`.  
  - Wire this router into the main Express app in `backend/src/index.js`.

- [ ] **T015** Implement admin credit adjustment and history endpoints  
  Add an admin router (e.g. `backend/src/api/adminCredits.js`) that provides:  
  - `POST /api/admin/users/:userId/credits/adjust`  
  - `GET /api/admin/users/:userId/credit-transactions`  
  Implement an `isAdmin(user)` helper using the `ADMIN_USER_IDS` env var and
  ensure only admins can access these routes. Use `LocalDatabaseService`
  helpers to adjust credits and list transactions.

- [ ] **T016** Register admin routes and ensure consistent error handling  
  In `backend/src/index.js` (or the main server bootstrap), mount the new
  admin router under `/api/admin` and confirm that `authMiddleware` is in
  place. Ensure all credit-related endpoints consistently return the
  standardized error payload for insufficient credits.

---

## Phase 3.4: Integration (backend ↔ frontend)

- [ ] **T017** Standardize insufficient-credit error responses in API routes  
  Audit `backend/src/api/cards.js` and `backend/src/api/collections.js` (and
  any new admin router) to ensure that all insufficient-credit cases use the
  same error shape `{ error: 'Not enough credits', code: 'INSUFFICIENT_CREDITS' }`
  so the frontend can reliably detect and display credit-related failures.

- [ ] **T018 [P]** Add credit usage client methods in `ApiService`  
  In `frontend/src/services/ApiService.ts`, add functions for:  
  - `getUsageSummary()` → calls `GET /api/users/me/usage`.  
  - (Optionally, admin-only) `adminAdjustCredits(userId, delta, source, reason)`
    and `getUserCreditTransactions(userId, options)` matching the contracts
    (primarily for future admin UI).

- [ ] **T019** Wire credit usage into frontend context  
  Update `frontend/src/context/AppContext.tsx` (or equivalent global context)
  to:  
  - Load the usage summary on startup or on-demand via `getUsageSummary()`.  
  - Store `creditsBalance` and key aggregates in context.  
  - Expose them via the context API so any page/component can display the
    current balance.

- [ ] **T020** Display credit balance and basic usage in UI  
  Add a small, non-intrusive UI element (e.g. a badge or panel) on a
  prominent page such as `frontend/src/pages/LandingPage.tsx` or a shared
  layout component that shows:  
  - Current credit balance.  
  - Possibly a short summary (e.g. total images or collections).  
  Ensure this uses the context values from T019.

- [ ] **T021** Handle `INSUFFICIENT_CREDITS` errors gracefully in the UI  
  Update the relevant components (e.g. card generation form, collection save
  actions, PDF export buttons) to detect API responses with
  `code === 'INSUFFICIENT_CREDITS'` and show a clear message/dialog to the
  user explaining that they must obtain more credits (for now via admin
  adjustments).

---

## Phase 3.5: Polish

- [ ] **T022 [P]** Refine admin and usage documentation  
  Update `README.md`, `START_APP.md`, or other top-level docs used by the
  project to describe:  
  - The credit system behaviour (1 credit = 8 images, collection/PDF rules).  
  - How to configure admin users (`ADMIN_USER_IDS`).  
  - Where to find usage and transaction endpoints.

- [ ] **T023 [P]** Manual end-to-end validation using `quickstart.md`  
  Follow `specs/005-implement-a-credit/quickstart.md` step by step
  (including admin adjustments) and note any discrepancies between expected
  and actual behaviour. File issues or TODOs as needed.

---

## Dependencies

- **T001** should be done before admin endpoints (T015) to ensure
  configuration is documented.  
- **T003–T007** (tests) MUST be implemented and running (failing initially)
  before starting **T008–T016** (core implementation).  
- **T008** (schema changes) must complete before **T009–T015** (all DB-using
  helpers and endpoints).  
- **T014–T016** depend on **T008–T010** for working DB and credit rules.  
- **T018–T021** depend on backend endpoints (T014–T017).  
- **T023** should be executed last as a final manual gate.

---

## Parallel Execution Example

Example of a safe parallel batch once setup is done:

```text
# Backend tests first (independent files)
Run in parallel:
- T003 [P] Unit tests for credit pricing formulas in backend/tests/credits.rules.test.js
- T004 [P] DB schema and credit persistence tests in backend/tests/credits.db.test.js
- T005 [P] Contract tests for GET /api/users/me/usage in backend/tests/credits.userUsage.api.test.js
- T006 [P] Contract tests for admin credit APIs in backend/tests/credits.admin.api.test.js
- T007 [P] Integration tests for credit enforcement flows in backend/tests/credits.integration.test.js

# Later, after backend core is in place, frontend tasks can also be grouped:
Run in parallel:
- T018 [P] Add credit usage client methods in frontend/src/services/ApiService.ts
- T022 [P] Refine admin and usage documentation
```

---

## Validation Checklist

- [ ] All contracts in `contracts/credits-api.openapi.yaml` have
      corresponding test tasks (T005, T006) and implementation tasks
      (T014, T015).  
- [ ] Entities from `data-model.md` (`UserAccount` extension,
      `CreditTransaction`) have corresponding persistence and logic tasks
      (T008, T009).  
- [ ] Core credit rules have unit tests (T003) and implementation
      (T010).  
- [ ] Critical user journeys from `spec.md` and `quickstart.md` are
      covered by integration tests (T007).  
- [ ] Frontend is updated to display balances and handle
      `INSUFFICIENT_CREDITS` errors (T018–T021).  
- [ ] Tasks are ordered so that tests precede implementation and
      parallel tasks do not touch the same files.
