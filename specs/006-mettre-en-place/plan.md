# Implementation Plan: Credit Management System with Pack-based Pricing

**Branch**: `006-mettre-en-place` | **Date**: 2025-11-26 | **Spec**: `specs/006-mettre-en-place/spec.md`  
**Input**: Feature specification from `/specs/006-mettre-en-place/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at { path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEND.md` for Qwen Code or `AGENTS.md` for opencodeencode)
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

The "Credit Management System with Pack-based Pricing" feature introduces a commercial credit system on top of the existing Fresquia web application (Node/Express backend + React/TypeScript frontend). This replaces any existing basic credit tracking with a full payment-processing system.

Each authenticated user can:
- **Purchase credit packs**: Découverte (25 credits, 4,99€), Pro (85 credits, 14,99€), Organisme (250 credits, 39,99€), Sur-mesure (>500 credits, custom pricing)
- **Start with 50 free credits** when their account is first created
- **Consume credits** for operations: image generation (1 credit per 8 images), image regeneration (0.2 credit), context generation (1 credit), collection saving (10 credits)
- **Export for free**: PDF and PNG exports consume no credits
- **View balance and transaction history** in the UI

Administrators can:
- **Manage user accounts** through an admin interface
- **View credit balances and transaction histories**
- **Handle Sur-mesure pack inquiries** for custom pricing**

Credits never expire and remain in user accounts indefinitely. The system must integrate with payment processing, handle fractional credits (0.2 precision), and ensure atomic transactions to prevent overspending.

## Technical Context

**Language/Version**:  
- Backend: Node.js (Express, CommonJS)  
- Frontend: TypeScript + React + Vite

**Primary Dependencies**:  
- Backend: Express, sqlite3 (LocalDatabaseService), Puppeteer + @@sparticuz/ch chromium-minmin (PDFService), Stability AI HTTP API client, Cloudflare R2 SDK/wrapper, Payment processing (Stripe/PayPal integration)  
- Frontend: React, React Router, MUI, context-based state management

**Storage**:  
- Primary: SQLite database managed through `LocalDatabaseService.js` (tables `users`, `credit_transactions`, `credit_packs`)  
- Binary assets: Cloudflare R

**Testing**:  
- Backend: existing Node test setup (`backend/tests/*.test.js`)  
- Frontend: existing React test stack if present

**Target Platform**:  
- Backend: Node.js service deployed (e.g. on Render or Cloudflare Worker-compatible environment)  
- Frontend: Browser-based SPA served by Vite build

**Project Type**:  
- Web application with separate `backend/` and `frontend/` projects

**Performance Goals**:  
- Credit checks and updates must add **negligible latency** compared to existing API operations  
- Payment processing must complete within standard payment gateway timeouts  
- No additional external round-trips beyond current image/PDF services and payment gateway

**Constraints**:  
- Reuse the existing **SQLite schema and LocalDatabaseService** pattern where possible  
- Integrate with **payment processing system** (Stripe/PayPal) for credit pack purchases  
- Ensure that credit spending and database writes are designed so that users cannot overspend credits even under concurrent requests  
- Support **fractional credit calculations** with 0.2 credit precision

**Scale/Scope**:  
- Initial scope compatible with a single SQLite instance and moderate concurrency  
- Payment integration requires PCI compliance considerations  
- Admin interface for user account management  

## Constitution Check

The current `.specify/memory/constitution.md` file contains only placeholder sections without concrete, enforced principles. There are no explicit constitutional constraints regarding architecture, technology choices, or process beyond the general guidance already followed in this repository.

Within that context, this plan:
- Keeps the design **simple** (single DB, reuse of LocalDatabaseService, incremental payment integration)
- Keeps changes **localized** to credit logic and payment processing, without re-architecting existing flows
- Preserves testability by planning clear places to add unit and integration tests for credit and payment behaviour

**Initial Constitution Gate**: PASS (no violations detected).  
**Post-Design Constitution Gate**: PASS (feature remains within constraints and avoids unnecessary complexity).

## Project Structure

### Documentation (this feature)
```text
specs/006-mettre-en-place/
├── spec.md              # Feature specification (/specify, already created)
├── plan.md              # This file (/plan output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - created by /tasks)
```

### Source Code (repository root)
```text
backend/
├── src/
│   ├── api/
│   │   ├── cards.js          # card generation + PDF export for uns
│   │   ├── collections.js    # collection CRUD + collection PDF export
│   │   ├── users.js          # NEW: user usage endpoints
│   │   ├── payments.js       # NEW: payment processing endpoints
│   │   └── admin.js          # NEW: admin management endpoints
│   ├── middleware/
│   │   ├── auth.js           # Firebase-based auth middleware
│   │   └── admin.js          # NEW: admin role verification
│   ├── models/
│   │   ├── Card.js
│   │   ├── CardCollection.js
│   │   ├── User.js           # NEW: user credit model
│   │   ├── CreditPack.js     # NEW: credit pack model
│   │   └── CreditTransaction.js # NEW: transaction model
│   └── services/
│       ├── LocalDatabaseService.js # SQLite access, users + collections + credits
│       ├── CreditService.js         # NEW: credit calculation and enforcement
│       ├── PaymentService.js        # NEW: payment processing integration
│       ├── PdfService.*.js         # PDF rendering
│       ├── R2Service.js            # image upload
│       └── AuthService.js          # token verification
└── tests/
    ├── api.test.js
    ├── models.test.js
    ├── services.test.js
    ├── credits.test.js            # NEW: credit system tests
    └── payments.test.js           # NEW: payment processing tests

frontend/
├── src/
│   ├── components/
│   │   ├── CreditBalance.tsx     # NEW: credit balance display
│   │   ├── CreditPackPurchase.tsx # NEW: pack purchase interface
│   │   ├── PaymentForm.tsx       # NEW: payment processing form
│   │   └── AdminUserManagement.tsx # NEW: admin interface
│   ├── pages/
│   │   ├── Billing.tsx           # NEW: billing and credit management
│   │   └── Admin.tsx             # NEW: admin dashboard
│   ├── context/
│   │   ├── AppContext.tsx        # existing app context
│   │   └── CreditContext.tsx     # NEW: credit management context
│   ├── services/
│   │   ├── ApiService.ts         # existing API service
│   │   └── PaymentService.ts     # NEW: payment API client
│   └── types/
│       ├── app.ts                # existing types
│       └── credit.ts             # NEW: credit system types
└── tests/ (if/when needed)
```

**Structure Decision**:  
Use the existing **web application** split: `backend/` for all server logic (including the credit engine, payment processing, DB schema updates, and admin/user APIs), and `frontend/` for UI surfaces (credit pack purchases, balance displays, admin management, and error messages).

All credit-related persistence and enforcement will live in `LocalDatabaseService.js` and new services (`CreditService.js`, `PaymentService.js`), with minimal, non-invasive changes to existing flows.

## Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - Payment processing integration (Stripe vs PayPal vs both)
   - PCI compliance requirements for handling payment data
   - Admin role management and authentication
   - Credit transaction atomicity patterns
   - Fractional credit precision handling in SQLite

2. **Generate and dispatch research agents**:
   ```
   Task: "Research payment processing integration for Node.js/Express web applications"
   Task: "Find best practices for PCI compliance in payment processing"
   Task: "Research admin role management patterns in Firebase/Express applications"
   Task: "Find patterns for atomic credit transactions in SQLite"
   Task: "Research fractional decimal handling in SQLite for financial calculations"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all technical decisions resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - User Account (extension with credit fields)
and permissions
   - Credit Pack (predefined packages)
   - Credit Transaction (audit log)
   - Payment Transaction (payment processing records)

2. **Generate API contracts** from functional requirements:
   - `GET /api/users/me/usage` - user credit balance and usage
   - `POST /api/payments/ponse-pack` - credit pack purchase
   - `POST /api/payments/webhook` - payment provider webhook
   - `GET /api/admin/users/{userId}` - admin user details
   - `GET /api/admin/users/{userId}/transactions` - admin transaction history
   - `POST /api/admin/users/{userId}/credits/adjust` - admin credit adjustment

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `spec.scripts/powershell/update-agent-context.ps1 -AgentType windsurf`

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P] 
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:
- TDD order: Tests before implementation 
- Dependency order: Database schema → services → APIs → frontend → admin
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-300 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| *(none)*  | N/A        | N/A                                   |

At this stage, no deviations from a simple, localized design are required. All changes are incremental on top of existing services, with payment processing added as a new, well-contained service.

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: ValidationValidation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v22.1.1 - See `/memory/constitution.md`*