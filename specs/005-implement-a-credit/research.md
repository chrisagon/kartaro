# Research: Credit-based usage and billing system

## Goals

- Extend the existing SQLite-based persistence (`LocalDatabaseService.js`) to
  support a per-user credit balance, aggregated usage counters, and a
  detailed `credit_transactions` log without introducing a new database.
- Ensure credit spending is **atomic** from the user perspective for
  image generation, collection save, and PDF export flows.
- Define a minimal, safe way for **administrators** to adjust user
  credits and inspect detailed transactions, while regular users only see
  aggregated usage.

## Findings & Decisions

### 1. SQLite schema evolution

- The repository already uses SQLite via `LocalDatabaseService.js` and
  performs migrations defensively using `CREATE TABLE IF NOT EXISTS` and
  `ALTER TABLE ... ADD COLUMN` with duplicate-column checks.
- We can safely extend the `users` table with new columns using the same
  pattern:
  - `credits_balance INTEGER NOT NULL DEFAULT 0`
  - `total_images_generated INTEGER NOT NULL DEFAULT 0`
  - `total_cards_generated INTEGER NOT NULL DEFAULT 0`
  - `total_collections_saved INTEGER NOT NULL DEFAULT 0`
  - `total_pdfs_exported INTEGER NOT NULL DEFAULT 0`
  - `total_credits_spent INTEGER NOT NULL DEFAULT 0`
  - `last_activity_at TEXT` (ISO string, nullable)
- A new `credit_transactions` table can be introduced with:
  - `id TEXT PRIMARY KEY`
  - `user_id TEXT NOT NULL`
  - `type TEXT NOT NULL` (earn/spend/adjust)
  - `source TEXT NOT NULL`
  - `credits INTEGER NOT NULL` (positive or negative)
  - `payload TEXT` (JSON)
  - `created_at TEXT NOT NULL`
  - Index on `(user_id, created_at)` for fast per-user history.

**Decision**: Perform schema changes in `initializeSchema()` inside
`LocalDatabaseService.js` using idempotent DDL statements.

### 2. Atomicity and concurrency

- SQLite in the current setup uses a single file DB; write operations are
  serialized at the database level.
- To avoid overspending credits, the plan is to:
  - Fetch the **current balance** inside a transaction.
  - Compare with `creditsRequired`.
  - If sufficient, update:
    - credit balance,
    - aggregated counters,
    - insert a `credit_transactions` row,
    - and, where applicable, persist the main business object
      (collection, etc.), all under the same SQLite write sequence.
- The existing design already performs write operations synchronously,
  which fits this pattern.

**Decision**: Implement helper functions in `LocalDatabaseService.js`
(e.g. `getUserUsage`, `updateUserUsageAndCredits`,
`createCreditTransaction`) that encapsulate this logic instead of
duplicating it in each API route.

### 3. Admin vs. regular user access

- The current authentication middleware uses Firebase ID tokens and
  attaches `req.user` with at least a `uid` field.
- For this feature, we need **administrator-only** operations:
  - Adjusting credits (manual grant/revoke).
  - Viewing the detailed `credit_transactions` log.
- A simple initial model is sufficient:
  - Maintain a list of **admin user IDs** in configuration
    (e.g. `ADMIN_USER_IDS` env var parsed as a comma-separated list).
  - Add a small helper (e.g. `isAdmin(user)`) and guard the admin
    endpoints with this check.

**Decision**: Use an environment-driven admin list for now; defer any
more complex role/permission system to future features.

### 4. Pricing formulas and rounding

- All pricing rules are explicitly defined in the spec:
  - Image generation: `creditsRequired = ceil(imageCount / 8)`.
  - Collection save: `creditsRequired = ceil(cardsCount * (10 / 52))`.
  - PDF export: `0` credits up to 16 cards inclusive, `2` credits above.
- Rounding always uses **ceiling** to avoid under-charging.
- All formulas operate on integer counts (images, cards) and simple
  numeric operations available in Node.

**Decision**: Implement formulas as small pure functions in the backend
service layer, with unit tests asserting edge cases (e.g. 0, 1, 8, 9, 16,
17, 52 cards/images).

### 5. User experience considerations

- Users must see a **clear error** when an action is blocked due to
  insufficient credits; silent failures are not acceptable.
- The frontend already has patterns for surfacing API errors via
  dialogs/snackbars; the backend should use a consistent error shape
  (e.g. `{ error: 'Not enough credits', code: 'INSUFFICIENT_CREDITS' }`).

**Decision**: Standardize a small error payload for credit failures and
let the frontend display it using existing error handling utilities.

## Open Questions (out of scope for this feature)

- Integration with real billing providers (Stripe/PayPal) for purchasing
  credits or subscriptions.
- Complex admin reporting dashboards or exports for credit and usage
  analytics.
- Advanced rate-limiting or abuse detection based on credit spending
  patterns.

These will be handled by future, dedicated features.
