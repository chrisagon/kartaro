# Quickstart: Credit-based usage and billing system

This guide explains how to manually verify the credit system in a local
development environment.

## Prerequisites

- Backend and frontend dependencies installed (follow project README).
- Environment configured so that the backend can start and access the
  SQLite database and external services (Stability AI, PDF rendering).

## 1. Start the application

1. Start the backend (from repository root or `backend/` as documented):
   - `npm run start:backend` or equivalent script.
2. Start the frontend (from `frontend/`):
   - `npm run dev` for local development.
3. Open the frontend in a browser and ensure you can access the main
   Fresquia UI.

## 2. Verify initial credits

1. Log in or rely on the default dev user configured in the backend.
2. Call the usage summary endpoint (e.g. using curl or a REST client):

   ```bash
   curl -H "Authorization: Bearer <TOKEN_OR_DEV>" \
     http://localhost:<backend-port>/api/users/me/usage
   ```

3. Confirm the response shows:
   - `creditsBalance` = 50  
   - All aggregated counters set to 0.

## 3. Test image generation credits

1. From the frontend, request generation of a known number of cards
   (e.g. 8 cards, each with an image).
2. After the operation completes successfully:
   - Call `GET /api/users/me/usage` again.  
   - Verify that `creditsBalance` decreased by
     `ceil(imageCount / 8)` (e.g. -1 for 8 images).  
   - Verify `totalImagesGenerated` and `totalCardsGenerated` increased.
3. Try generating more images than the remaining credits allow:  
   - Expect the backend to return an error like
     `{ error: 'Not enough credits', code: 'INSUFFICIENT_CREDITS' }`.  
   - Confirm that no images are generated and usage counters do not
     change.

## 4. Test collection save credits

1. Build or generate a collection with a specific number of cards
   (e.g. 10, 26, 52 cards).
2. Save the collection via the UI (or directly by POST to
   `/api/collections`).
3. For each case, verify that:
   - The operation succeeds only if `creditsBalance` is at least
     `ceil(cardsCount * (10 / 52))`.  
   - After a successful save, `creditsBalance` is reduced accordingly
     and `totalCollectionsSaved` increases.
4. Attempt to save a 52-card collection with insufficient credits.  
   - Expect a "not enough credits" error and no new collection
     persisted.

## 5. (Optional) Test PDF export behaviour

1. From the frontend UI, request a PDF export (from a collection or from
   unsaved cards).  
   - Confirm the PDF is generated and downloaded.  
   - Verify that `creditsBalance` does **not** change after the export.  

2. If you explicitly exercise any backend PDF export endpoint for
   diagnostics, you MAY observe different behaviour as described in the
   feature specification, but the default Fresquia UI treats PDF export
   as a free, frontend-only operation that does not consume credits.

## 6. Test admin credit adjustments and transaction log

1. Configure a user as **admin** (e.g. by setting their UID in
   `ADMIN_USER_IDS` environment variable).
2. As this admin, call the adjustment endpoint:

   ```bash
   curl -X POST \
     -H "Authorization: Bearer <ADMIN_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{ "delta": 10, "source": "admin_grant", "reason": "test" }' \
     http://localhost:<backend-port>/api/admin/users/<USER_ID>/credits/adjust
   ```

3. Confirm that the target user's `creditsBalance` increases by 10 and
   that a corresponding `credit_transactions` entry is recorded.
4. As admin, call the transaction listing endpoint:

   ```bash
   curl -H "Authorization: Bearer <ADMIN_TOKEN>" \
     http://localhost:<backend-port>/api/admin/users/<USER_ID>/credit-transactions
   ```

5. Verify the list includes entries for:
   - Image generation spends.  
   - Collection save spends.  
   - PDF export spends (when >16 cards).  
   - Admin adjustments (earn or spend).
6. Confirm that non-admin users **cannot** access the admin endpoints
   (should receive a 403/401-style response).

If all steps behave as described, the credit-based usage and billing
system is functioning according to the specification.
