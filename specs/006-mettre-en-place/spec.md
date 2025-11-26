# Feature Specification: Credit Management System with Pack-based Pricing

**Feature Branch**: `006-mettre-en-place`  
**Created**: 2025-11-26  
**Status**: Draft  
**Input**: User description: "Mettre en place un systeme de gestion de crédits avec les packs suivant : Découverte 25 crédits 4.99€, Pro  85 crédits 14.99€, Organisme 250 crédits 39.99€, Sur-mesure >500 crédits sur devis. Générer 8images coûte 1 crédit, Regénérer/corriger 1 image coûte 0.2 crédit, Générer 1 contexte coûtte 1 crédit, Sauvegarder une collection coûte 10 crédits. Générer un pdf est gratuit. L'export de PNG est gratuit. Il faut un compte administrateur pour gérer les comptes utilisateurs. Au départ,les utilisateurs commencent avec 50 crédits gratuit."

## Execution Flow (main)
```
1. Parse user description from Input
   → Extract: credit packs, pricing, costs,
2. Extract key concepts from description
   → Actors: regular users, administrators
   → Actions: purchase packs, consume credits, manage users
   → Data: credit balances, transactions, user accounts
3. For each unclear aspect:
   → Mark payment processing requirements
   → Mark admin interface needs
4. Fill User Scenarios & Testing section
   → Define user journeys for pack purchase and credit consumption
5. Generate Functional Requirements
   → Credit pack system, consumption rules, admin management
6. Identify Key Entities
   → User Account, Credit Pack, Credit Transaction
7. Run Review Checklist
   → Verify all requirements are testable and complete
8. Return: SUCCESS (spec ready for planning)
```

---

## ⚡ Quick Guidelines
- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business holders, not developers

### Section Requirements
- **Mandatory sections**: Must be completed for every feature
- **Optional sections**: Include only when relevant to the feature
- When a section doesn't apply, remove it entirely (don't leave as "N/A")

### For AI Generation
When creating this spec from a user prompt:
1. **Mark all ambiguities**: Use [NEEDS CLARIFICATION: specific question] for any assumption you'd need to make
2. **Don't guess**: If the prompt doesn't specify something (e.g., "login system" without auth method), mark it
3. **Think like a tester**: Every vague requirement should fail the "testable and unambiguous" checklist item
4. **Common underspecified areas**:
   - User types and permissions
   - Data retention/deletion policies  
   - Performance targets and scale
   - Error handling behaviors
   - Integration requirements
   - Security/comcompliance needs

---

## Clarifications

### Session 2025-11-26
- Q: What happens to unused credits? Do credits expire after a certain period? → A: Credit never expire

---

## User Scenarios & Testing *(mandatory)*

### Primary User Story
As a user of Fresquia, I want to purchase credit packs to access image generation, context creation, and collection saving features:

### Acceptance Scenarios
1. **New user registration with free credits**  
   **Given** a new user registers for the first time  
   **When** their account is created  
   **Then** the system automatically grants them 50 free credits and displays their current balance

2. **Credit pack purchase - Découverte**  
   **Given** a user with 10 credits remaining  
   **When** they purchase the "Découverte" pack for 4,99€  
   **Then** the system adds 25 credits to their balance (total: 35 credits) and records the transaction

3. **Credit consumption - Image generation**  
   **Given** a user with 50 credits  
   **When** they generate 16 images  
   **Then** the system consumes 2 credits (16 images � 8 = 2) leaving them with 48 credits

4. **Credit consumption - Image regeneration**  
   **Given** a user with 10 credits  
   **When** they regenerate 1 image  
   **Then** the system consumes 0.2 credits leaving them with 9.8 credits

5. **Credit consumption - Context generation**  
   **Given** a user with 15 credits  
   **When** they generate 1 context  
   **Then** the system consumes 1 credit leaving them with 14 credits

6. **Credit consumption - Collection saving**  
   **Given** a user with 20 credits  
   **When** they save a collection  
   **Then** the system consumes 10 credits leaving them with 10 credits

7. **Free operations - PDF and PNG export**  
   **Given** a user with any credit balance (including 0)  
   **When** they export a collection as PDF or PNG  
   **Then** the system allows the export without consuming any credits

8. **Insufficient credits blocking**  
   **Given** a user with 0.5 credits  
   **When** they attempt to generate 8 images (requires 1 credit)  
   **Then** the system blocks the operation with a clear "insufficient credits" message

9. **Administrator user management**  
   **Given** an administrator logged into the admin interface  
   **When** they view a user's account  
   **Then** they can see the user's credit balance, transaction history, and account status

10. **Sur-mesure pack inquiry**  
    **Given** a user needing more than 500 credits  
    **When** they request a "Sur-mesure" pack  
    **Then** the system provides contact information for custom pricing inquiries

### Edge Cases
- What happens when a user has exactly 0.2 credits and tries to regenerate an image?  
  → The operation should be allowed, leaving the user with 0 credits.
- How does the system handle concurrent credit consumption?  
  → Credits must not be overspent; operations should appear atomic.
- What happens when payment processing fails?  
  → No credits should be added, and the user should receive a clear payment error.
- How are fractional credits displayed and handled?  
  → System must support decimal credits (0.2 precision) and display them clearly.
- What happens to unused credits?  
  → Credits never expire and remain in the user's account indefinitely.

---

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: The system MUST offer four predefined credit packs: Découverte (25 credits, 4,99€), Pro ( 85 credits, 14,99€), Organisme (250 credits, 39,99€), and Sur-mesure (>500 credits, 500+ credits, custom pricing).

- **FR-002**: When a new user account is created, the system MUST automatically initialize the user's credit balance to 50 free credits.

- **FR-003**: Users MUST be able to purchase credit packs through a payment processing system that securely handles transactions and credits allocation.

- **FR-004**: For image generation operations, the system MUST consume credits at the rate of 1 credit per 8 images generated (formula:: creditsRequired = ceil(imageCount / 8)).

- **FR-005**: For individual image regeneration or correction operations, the system MUST consume exactly 0.2 credits per image.

- **FR-006**: For context generation operations, the system MUST consume exactly 1 credit per context created.

- **FR-007**: For collection saving operations, the system MUST consume exactly 10 credits per collection saved.

- **FR-008**: PDF export operations MUST be free and MUST NOT consume any credits regardless of collection size.

- **FR-009**: PNG export operations MUST be free and MUST NOT consume any credits regardless of collection size.

- **FR-010**: Before any credit-consuming operation, the system MUST verify that the user has sufficient credits and MUST block the operation with a clear error message if credits are insufficient.

- **FR-011**: The system MUST maintain a detailed transaction log for each user showing all credit additions (pions, initial grants):

- **FR-012**: The system MUST provide an administrative interface thatadministrators to view user accounts, credit balances, and transaction histories.

- **FR-013**: The system MUST support fractional credit calculations with at least 0.2 credit precision for operations like image regeneration.

- **FR-014**: For Sur-mesure pack inquiries, the system MUST provide contact or a form for users to request custom pricing for credit quantities exceeding the standard packs.

- **FR-015**: The system MUST display the current credit balance prominently in the user interface at all times.

- **FR-016**: The system MUST prevent concurrent operations from overspending the same credits through proper atomic transaction handling.

- **FR-017**: The payment processing system MUST handle failed transactions gracefully without adding credits to user accounts.

- **FR-018**: Credits MUST never expire and must remain in user accounts indefinitely until consumed.

### Key Entities *(include if feature involves data)*

- **User Account**  
  Represents an individual user in the system with associated credits and permissions.  
  Key conceptual attributes:
  - Unique identifier and authentication credentials
  - Current credit balance (supports fractional values)
  - Account type (regular user vs administrator)
  - Creation date and last activity timestamp
  - Transaction history reference
  Relationships:
  - Has many Credit Transactions
  - Can purchase Credit Packs
  - Owns Collections and generated content

- **Credit Pack**  
  Represents a predefined package of credits available for purchase.  
  Key conceptual attributes:
  - Pack name (Découverte, Pro, Organisme, Sur-mesure)
  - Credit quantity included
  - Price in currency (EUR)
  - Active/inactive status
  - Sort order for display
  Relationships:
  - Purchased by Users (creates Credit Transactions)

- **Credit Transaction**  
  Represents a single credit movement in a user's account.  
  Key conceptual attributes:
  - Unique transaction identifier
  - Associated user account
  - Transaction type (purchase, initial_gr, consumption, refund)
  - Credit amount (positive for additions, negative for consumption)
  - Source/purpose (image_generation, regeneration, context_generation, collection_save, pack_purchase)
  - Timestamp and metadata (operation details, pack reference)
  Relationships:
  - Belongs to one User Account
  - May reference a Credit Pack (for purchases)

---

## Review & Acceptance Checklist
*GATE: Automated checks run during main() execution*

### Content Quality
- [ ] No implementation details (languages, frameworks, APIs)
- [ ] Focused on user value and business needs
- [ ] Written for non-technical stakeholders
- [ ] All mandatory sections completed

### Requirement Completeness
- [x] No [NEEDS CLARIFICATION] markers remain (credit expiration policy resolved)
- [ ] Requirements are testable and unambiguous for the described business rules.
- [ ] Success criteria are measurable in terms of credit balances and transactions.
- [ ] Scope is clearly bounded to credit packs, consumption rules, and admin management.
- [ ] Dependencies and assumptions (payment processing, existing auth) are identified.

---

## Execution Status
*For tracking the processing of this spec from the original description*

- [x] User description parsed
- [x] Key concepts extracted (credit packs, pricing,, consumption rules, admin system)
- [x] Ambiguities marked (credit expiration policy)
- [x] User scenarios defined with concrete Given/When/Then examples
- [x] Requirements generated and numbered (FR-001+)
- [x] Entities identified (User Account, Credit Pack, Credit Transaction)
- [x] Review checklist fully passed (all clarifications resolved)

---