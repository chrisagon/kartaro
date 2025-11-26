# Feature Specification: Credit-based usage and billing system

**Feature Branch**: `005-implement-a-credit`  
**Created**: 2025-11-19  
**Status**: Draft  
**Input**: User description: "Implement a credit-based usage and billing system on top of the existing Fresquia application. Each authenticated user has an account with a credit balance and detailed usage statistics. One credit corresponds to the generation of up to 8 images with Stability AI. When the user triggers image generation (initial card generation or single image regeneration), the backend computes how many images will be generated, calculates the required credits as ceil(imageCount / 8), checks the user's credit balance, and blocks the action if there are not enough credits. Saving card collections consumes credits proportionally to the number of cards, anchored on the rule that saving a full 52-card collection costs 10 credits. The formula is creditsRequired = ceil(cardsCount * (10 / 52)), so larger collections cost more credits and smaller collections cost fewer. If the user has insufficient credits, the collection save is rejected. PDF export is free for small collections (up to and including 16 cards) and paid for larger collections. For any PDF export with more than 16 cards, the backend charges 2 credits. If the user does not have at least 2 credits, the PDF export is blocked and no PDF is generated. Each user starts with an initial free quota of 50 credits when their account is first created. The system maintains both aggregated usage counters on the user record (total images generated, total cards generated, total collections saved, total PDFs exported, total credits spent, current credit balance) and a detailed credit_transactions log that records every credit change (earn/spend/adjust) with the source and a JSON payload (e.g. collectionId, cardsCount). All relevant operations (image generation, collection save, PDF export) must be integrated with this credit system."

## Clarifications

> Note (2025-11-20): In the currently shipped Fresquia UI, PDF export is implemented entirely on the frontend and does not consume credits. The backend PDF pricing rules described in this document are optional and apply only to backend-driven export flows that are not used by the default UI.

### Session 2025-11-19

- Q: How do users get more credits after the initial 50? Are there paid plans, one-off purchases, manual admin adjustments?  A: For this feature, users get more credits only through manual adjustments performed by an administrator; one-off purchases and subscription plans via Stripe or PayPal will be handled in later features.
- Q: Who can see the detailed credit_transactions log and in what format (end users vs. admins only)?  A: Only administrators can see the detailed credit_transactions log; end-users see only their aggregated usage statistics and current credit balance.

## Execution Flow (main)
```text
1. User is authenticated or otherwise identified by the application.
   → If this is the first time the user is seen by the system, a user account
     is created with an initial credit balance of 50 credits and all usage
     counters set to zero.

2. Image generation (initial card generation or single image regeneration)
   2.1 User configures and submits a request that results in image generation.
   2.2 System determines how many images will be generated (imageCount).
   2.3 System computes creditsRequired = ceil(imageCount / 8).
   2.4 System compares creditsRequired with the user's current credit balance.
       → If creditsRequired > balance: reject the request with a clear
         "not enough credits" error and do not generate any images.
       → If creditsRequired ≤ balance: accept the request and call the
         image-generation provider.
   2.5 On successful image generation:
       → Decrease the user's credit balance by creditsRequired.
       → Increase aggregated usage counters (totalImagesGenerated,
         totalCardsGenerated when applicable).
       → Append a credit transaction entry describing the change
         (type = spend, source = image_generation, credits = -creditsRequired,
         payload including imageCount and relevant context).
   2.6 If image generation fails, the user's credit balance and usage
       counters MUST remain unchanged.

3. Saving a card collection
   3.1 User saves a collection that contains cardsCount cards.
   3.2 System computes rawCredits = cardsCount * (10 / 52) and then
       creditsRequired = ceil(rawCredits).
   3.3 System compares creditsRequired with the user's credit balance.
       → If creditsRequired > balance: reject the save operation with a
         "not enough credits" message; the collection is not saved.
       → If creditsRequired ≤ balance: proceed with saving the collection.
   3.4 On successful save:
       → Decrease credit balance by creditsRequired.
       → Increase aggregated usage counters (totalCollectionsSaved, and
         optionally totalCardsGenerated if appropriate).
       → Append a credit transaction entry (type = spend,
         source = collection_save, credits = -creditsRequired,
         payload including collection identifier and cardsCount).
   3.5 If the save operation fails, the user's credits and usage counters
       MUST remain unchanged.

4. PDF export
   4.1 User requests a PDF export for a set of cards (either from an
       unsaved card set or an existing collection).
   4.2 System determines cardsCount for the PDF export.
   4.3 System applies pricing rules:
       → If cardsCount ≤ 16: creditsRequired = 0 (free tier).
       → If cardsCount > 16: creditsRequired = 2.
   4.4 System compares creditsRequired with credit balance.
       → If creditsRequired > balance: reject the export with a
         "not enough credits" message and do not generate a PDF.
       → If creditsRequired ≤ balance: proceed with PDF generation.
   4.5 On successful PDF generation:
       → Increase aggregated usage counter totalPdfsExported.
       → If creditsRequired > 0: decrease credit balance by creditsRequired
         and append a credit transaction entry (type = spend,
         source = pdf_export, credits = -creditsRequired,
         payload including cardsCount and optional collection identifier).
   4.6 If PDF generation fails, credits and usage counters MUST remain
       unchanged.

5. Account and usage visibility
   5.1 User can view their current credit balance.
   5.2 User can view aggregated usage statistics (images generated,
       cards generated, collections saved, PDFs exported, total credits spent).
   5.3 (Future) User may view a detailed list of credit transactions;
       scope and UI for this view may be refined separately.

6. Credit replenishment and adjustments
   6.1 New users always start with 50 free credits when their account
       is first created.
   6.2 Additional ways to earn or purchase credits (such as one-off
       purchases or subscription plans via Stripe or PayPal) are
       considered future work and are out of scope for this feature.
       In this feature, users can only receive additional credits
       through manual adjustments performed by an administrator.
```

---

## ⚡ Quick Guidelines
- Focus on WHAT the credit system must enforce for users and business
  stakeholders (who can do what, at what cost, under which conditions).
- Avoid implementation details such as specific databases, schemas,
  programming languages, or HTTP endpoints.
- Every rule about credits and usage MUST be testable with precise,
  measurable expectations (before/after balances, counters, and logs).
- Clearly separate free usage from paid usage so that pricing changes
  can be communicated and tested.
- Use clear terminology consistently (e.g., "credit balance",
  "usage counters", "credit transaction").

### Section Requirements
- **Mandatory sections**: User Scenarios & Testing, Requirements.
- **Optional sections**: Key Entities and any additional sections that
  provide clarity without introducing implementation details.
- When a section does not apply, it should be removed rather than left
  as "N/A".

### For AI Generation
When refining or regenerating this spec from a user prompt:
1. Mark all ambiguities using `[NEEDS CLARIFICATION: ...]` rather than
   silently guessing.
2. Avoid assumptions about how credits are purchased, refunded, or
   expired unless explicitly defined in the business rules.
3. Think like a tester: every credit change should be traceable and
   verifiable through expected balances, counters, and transaction logs.
4. Pay particular attention to:
   - Boundary conditions on balances (e.g., exactly 0 credits remaining).
   - Concurrent actions that might attempt to spend credits at the same time.
   - Error cases where an operation fails after a credit check.

---

## User Scenarios & Testing *(mandatory)*

### Primary User Story
As an authenticated user of Fresquia, I want my usage of image generation,
collection saving, and PDF export to be governed by a clear credit balance,
so that I understand what is free, what is paid, and I cannot accidentally
consume more than my available credits.

### Acceptance Scenarios
1. **Image generation with sufficient credits**  
   **Given** a user with a credit balance of 50 credits  
   **When** the user requests generation of 8 images  
   **Then** the system computes creditsRequired = ceil(8 / 8) = 1, accepts
   the request, generates the images successfully, decreases the balance
   to 49, updates aggregated image/card counters, and records a single
   credit transaction of -1 credit with source `image_generation`.

2. **Image generation with insufficient credits**  
   **Given** a user with a credit balance of 1 credit  
   **When** the user attempts to generate 16 images  
   **Then** the system computes creditsRequired = ceil(16 / 8) = 2, detects
   that the user does not have enough credits, rejects the request with
   a clear "not enough credits" message, does not generate any images,
   does not change the credit balance, and does not modify usage counters
   or credit transactions.

3. **Saving a full 52-card collection with sufficient credits**  
   **Given** a user with a credit balance of 20 credits and a collection
   containing 52 cards  
   **When** the user saves the collection  
   **Then** the system computes creditsRequired = ceil(52 * 10 / 52) = 10,
   accepts the save, stores the collection successfully, decreases the
   balance to 10, increments the totalCollectionsSaved counter, and records
   a credit transaction of -10 credits with source `collection_save` and
   payload including the collection identifier and cardsCount = 52.

4. **Saving a full 52-card collection with insufficient credits**  
   **Given** a user with a credit balance of 5 credits and a collection
   containing 52 cards  
   **When** the user attempts to save the collection  
   **Then** the system computes creditsRequired = 10, rejects the request
   due to insufficient credits, does not persist the collection, leaves the
   user balance at 5 credits, and does not change usage counters or
   transaction logs.

5. **Free PDF export for small collection**  
   **Given** a user with any non-negative credit balance and a set of
   16 cards to export as PDF  
   **When** the user requests a PDF export  
   **Then** the system computes cardsCount = 16 and creditsRequired = 0,
   generates the PDF successfully, increments totalPdfsExported by 1,
   leaves the credit balance unchanged, and does not record a spend
   transaction for this export.

6. **Paid PDF export for large collection with insufficient credits**  
   **Given** a user with a credit balance of 1 credit and a set of 20 cards
   to export as PDF  
   **When** the user requests a PDF export  
   **Then** the system computes cardsCount = 20 and creditsRequired = 2,
   rejects the export due to insufficient credits, does not generate any
   PDF, does not change the credit balance, and does not update usage
   counters or transaction logs.

7. **Viewing account usage summary**  
   **Given** an authenticated user with a history of previous operations  
   **When** the user opens the account or billing view  
   **Then** the system displays the current credit balance and aggregated
   usage statistics (total images generated, cards generated, collections
   saved, PDFs exported, total credits spent) in a clear and understandable
   format.

### Edge Cases
- What happens when the computed creditsRequired is 0 (e.g., due to
  cardsCount ≤ 16 for PDF)?  
  → The action should proceed without changing the credit balance but
    still update relevant usage counters where applicable.

- How does the system handle concurrent requests that attempt to spend
  credits at nearly the same time?  
  → Credits MUST NOT be overspent; the system must behave as if credit
    checks and updates were atomic, so that two overlapping operations
    cannot both consume the same credits.

- What happens when the client sends invalid counts (negative card counts
  or image counts, or zero where a positive number is expected)?  
  → Such requests should be rejected as invalid before any credit
    computation or spending occurs.

- How does the system behave when the user has exactly the required number
  of credits?  
  → The action should be allowed, and the resulting credit balance may
    legitimately become 0.

- What happens if the downstream image-generation or PDF service fails
  after a credit check has passed?  
  → Credits and usage counters must only be changed for successfully
    completed operations; failures must not result in any credit spending.

---

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: The system MUST maintain a credit balance for each
  authenticated user and treat it as the single source of truth for
  whether paid actions are allowed.

- **FR-002**: When a new user account is created for the first time,
  the system MUST initialize the user's credit balance to 50 credits
  and initialize all usage counters to zero.

- **FR-003**: For any action that triggers image generation, the system
  MUST determine the total number of images that will be generated
  (imageCount) and compute `creditsRequired = ceil(imageCount / 8)`.

- **FR-004**: Before initiating image generation, the system MUST compare
  creditsRequired with the user's credit balance and MUST block the
  action (with a clear error message) if `creditsRequired > balance`.

- **FR-005**: When an image-generation action completes successfully,
  the system MUST:
  - Decrease the credit balance by creditsRequired.
  - Increase aggregated usage counters (at minimum, total images
    generated; and total cards generated when applicable).
  - Record a credit transaction entry with type = spend, source =
    `image_generation`, credits = -creditsRequired, and payload that
    includes at least imageCount and a reference to the triggering
    context.

- **FR-006**: When an image-generation action fails (for example due to
  provider errors or timeouts), the system MUST NOT change the user's
  credit balance, usage counters, or credit transaction log.

- **FR-007**: When a user saves a card collection containing cardsCount
  cards, the system MUST compute `creditsRequired = ceil(cardsCount *
  (10 / 52))` and use this value to enforce credit spending for the save.

- **FR-008**: Before saving a collection, the system MUST block the save
  and return a clear "not enough credits" error when
  `creditsRequired > balance`, ensuring the collection is not persisted
  and no usage counters are changed in that case.

- **FR-009**: When a collection save succeeds, the system MUST decrease
  the credit balance by creditsRequired, increment aggregated usage
  counters (including at least totalCollectionsSaved), and record a
  credit transaction with type = spend, source = `collection_save`,
  credits = -creditsRequired, and payload including collection
  identifier and cardsCount.

- **FR-010**: The system MUST ensure that collection saves and their
  associated credit updates are effectively atomic from a user
  perspective; users MUST NOT see a collection saved if the credits
  were not successfully debited, and vice versa.

- **FR-011**: For any PDF export request, the system MUST determine
  cardsCount and apply the following pricing rules:
  - If `cardsCount ≤ 16`: `creditsRequired = 0` (free export).
  - If `cardsCount > 16`: `creditsRequired = 2` (paid export).

- **FR-012**: For paid PDF exports (`creditsRequired > 0`), the system
  MUST block the export and return a "not enough credits" error if
  `creditsRequired > balance`, and MUST NOT generate or deliver
  any PDF in that case.

- **FR-013**: When a PDF export completes successfully, the system MUST
  increment totalPdfsExported and, if creditsRequired > 0, decrease the
  credit balance by creditsRequired and record a credit transaction with
  type = spend, source = `pdf_export`, credits = -creditsRequired, and
  payload including cardsCount and any relevant reference to the
  collection or context.

- **FR-014**: The system MUST maintain aggregated usage counters per
  user, including at least: total images generated, total cards
  generated, total collections saved, total PDFs exported, total
  credits spent, and current credit balance.

- **FR-015**: The system MUST maintain a detailed credit transaction log
  per user where each entry records: the amount of credits added or
  removed, whether the change is an earning, spending, or adjustment,
  the logical source of the change (e.g., image_generation,
  collection_save, pdf_export, admin_grant, purchase), and a structured
  payload for future analysis (e.g., cardsCount, collection identifiers,
  or other contextual information).

- **FR-016**: Users MUST be able to view at least their current credit
  balance and core aggregated usage statistics in the application UI in
  a way that is understandable and consistent with the business rules.

- **FR-017**: The system MUST expose a detailed list of credit
  transactions to administrators, while end-users only see their
  aggregated usage statistics and current credit balance; the exact
  administrator UI, filtering, and retention requirements for this
  detailed list may be refined later.

- **FR-018**: Beyond the initial free quota and manual credit
  adjustments performed by an administrator, additional flows for
  purchasing or automatically granting credits (such as one-off
  purchases or subscription plans via Stripe or PayPal) are explicitly
  out of scope for this feature and MUST be defined and implemented
  in separate future features.

### Key Entities *(include if feature involves data)*

- **User Account**  
  Represents an individual person or organization using Fresquia.  
  Key conceptual attributes:
  - Unique identifier (e.g., derived from authentication provider).
  - Display and contact information (not specified by this feature).
  - Credit balance.
  - Aggregated usage counters: total images generated, total cards
    generated, total collections saved, total PDFs exported, total
    credits spent.
  - Creation and last-activity timestamps.
  Relationships:
  - Has many credit transactions.
  - Owns or is associated with card collections.

- **Credit Transaction**  
  Represents a single change in a user's credit balance.
  Key conceptual attributes:
  - Unique transaction identifier.
  - Associated user account.
  - Type of change (earn, spend, adjust).
  - Logical source (image_generation, collection_save, pdf_export,
    admin_grant, purchase, etc.).
  - Credits delta (positive or negative integer).
  - Structured payload storing contextual details (such as cardsCount,
    collection identifiers, or descriptive notes).
  - Timestamp of when the change occurred.

---

## Review & Acceptance Checklist
*GATE: To be used during review of this specification*

### Content Quality
- [x] No implementation details (languages, frameworks, low-level APIs)
      are required to understand the feature.
- [x] Focused on user value and business rules for credits and usage.
- [x] Written so that non-technical stakeholders can understand
      what is free, what is paid, and how limits are enforced.
- [x] All mandatory sections (User Scenarios & Testing, Requirements)
      are completed.

### Requirement Completeness
- [ ] No `[NEEDS CLARIFICATION]` markers remain (pending clarification
      of purchasing and visibility flows).
- [x] Requirements are testable and unambiguous for the described
      business rules.
- [x] Success criteria are measurable in terms of before/after credit
      balances, usage counters, and transaction entries.
- [x] Scope is clearly bounded to enforcement of credits for image
      generation, collection saves, and PDF exports, plus initial
      free quota and logging.
- [x] Dependencies and assumptions (such as authentication existing
      already and future purchasing flows) are identified.

---

## Execution Status
*For tracking the processing of this spec from the original description*

- [x] User description parsed
- [x] Key concepts extracted (credits, image generation, collection
      save, PDF export, free vs. paid tiers, initial quota, logging)
- [x] Ambiguities marked where business rules are incomplete
      (credits purchasing, detailed visibility)
- [x] User scenarios defined with concrete Given/When/Then examples
- [x] Requirements generated and numbered (FR-001+)
- [x] Entities identified (User Account, Credit Transaction)
- [ ] Review checklist fully passed (awaiting resolution of all
      `[NEEDS CLARIFICATION]` markers)

---
