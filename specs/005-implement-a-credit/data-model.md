# Data Model: Credit-based usage and billing system

This document describes the conceptual data model introduced or extended
by the credit-based usage and billing feature. It is implementation
agnostic but aligned with the existing SQLite storage.

## Entities

### UserAccount (extension)

Represents an authenticated user of Fresquia, extended with credit and
usage information.

**Attributes**
- `id: string`
  - Unique user identifier (e.g. Firebase UID).
- `username: string`
  - Existing login/identifier field (may mirror `id`).
- `password: string`
  - Existing credential field (not modified by this feature).
- `creditsBalance: integer`
  - Current number of credits available to the user.
  - Initialized to 50 when the user is first created.
- `totalImagesGenerated: integer`
  - Cumulative count of images generated for this user.
- `totalCardsGenerated: integer`
  - Cumulative count of cards generated.
- `totalCollectionsSaved: integer`
  - Cumulative count of saved collections.
- `totalPdfsExported: integer`
  - Cumulative count of PDF exports.
- `totalCreditsSpent: integer`
  - Cumulative number of credits spent (sum of negative spends,
    stored as positive aggregate for reporting).
- `lastActivityAt: datetime` (optional)
  - Last time a credit-related action occurred.
- `createdAt: datetime`
- `updatedAt: datetime`

**Relationships**
- `UserAccount 1 — * CreditTransaction` (one-to-many)
- `UserAccount 1 — * Collection` (already existing)

---

### CreditTransaction

Represents a single atomic change in a user's credit balance.

**Attributes**
- `id: string`
  - Unique identifier (e.g. time-based random ID).
- `userId: string`
  - Reference to the associated UserAccount.
- `type: string`
  - One of: `"earn"`, `"spend"`, `"adjust"`.
- `source: string`
  - Logical origin of the change, e.g.:
    - `"image_generation"`
    - `"collection_save"`
    - `"pdf_export"`
    - `"admin_grant"`
    - `"admin_revoke"`
- `credits: integer`
  - Signed number of credits added or removed.  
  - Example: `-2` for a paid PDF export; `+50` for an admin grant.
- `payload: JSON`
  - Structured context for the transaction, e.g.:
    - `{ "collectionId": "...", "cardsCount": 52 }`
    - `{ "imageCount": 16 }`
    - `{ "reason": "manual admin adjustment" }`
- `createdAt: datetime`
  - When the transaction was recorded.

**Relationships**
- `CreditTransaction * — 1 UserAccount` (many-to-one)

---

### Collection (existing, contextual)

The collection model already exists. This feature does not modify its
core shape but relies on:

- `id: string`
- `userId: string`
- `name: string`
- `cards: Card[]`
- `isPublic: boolean`
- `createdAt: datetime`
- `updatedAt: datetime`

**Usage**
- The number of cards (`cards.length`) is used to compute the
  `creditsRequired` for saving or exporting a collection.

---

### Card (existing, contextual)

Cards represent individual prompts/results.

Relevant attributes for this feature:
- `id: string`
- `title: string`
- `description: string`
- `icon: string | null`
- `category: string | null`
- `image: string | null` (base64 or URL)

**Usage**
- The number of images generated for cards is used to compute
  `creditsRequired` for image-generation actions.

---

## Derived/Computed Values

The following values are not stored as separate entities but are
computed from the entities above:

- `creditsRequiredForImages(imageCount) = ceil(imageCount / 8)`
- `creditsRequiredForCollectionSave(cardsCount) = ceil(cardsCount * (10 / 52))`

These formulas are implemented in backend services and used consistently
across all relevant credit-enforced APIs. PDF export is intentionally
free from a credit perspective in the current application and therefore
has no `creditsRequiredForPdf` formula.
