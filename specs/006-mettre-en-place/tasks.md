# Tasks: Credit Management System with Pack-based Pricing

**Input**: Design documents from `/specs/006-mettre-en-place/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `backend/src/`, `frontend/src/`
- Paths shown below follow the web application structure from plan.md

## Phase 3.1: Setup
- [x] T001 Add Stripe Node.js SDK to backend/package.json dependencies
- [x] T002 [P] Add environment variables for Stripe configuration (.env.example)
- [x] T003 [P] Create admin middleware in backend/src/middleware/admin.js

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [x] T004 [P] Contract test GET /api/users/me/usage in backend/tests/api/test_users_usage.test.js
- [x] T005 [P] Contract test POST /api/payments/purchase-pack in backend/tests/api/test_payments_purchase.test.js
- [x] T006 [P] Contract test POST /api/payments/webhook in backend/tests/api/test_payments_webhook.test.js
- [x] T007 [P] Contract test GET /api/admin/users/{userId} in backend/tests/api/test_admin_users.test.js
- [x] T008 [P] Contract test GET /api/admin/users/{userId}/transactions in backend/tests/api/test_admin_transactions.test.js
- [x] T009 [P] Contract test POST /api/admin/users/{userId}/credits/adjust in backend/tests/api/test_admin_adjust.test.js
- [x] T010 [P] Integration test credit consumption in backend/tests/integration/test_credit_consumption.test.js
- [x] T011 [P] Integration test payment flow in backend/tests/integration/test_payment_flow.test.js

## Phase 3.3: Database Schema & Models (ONLY after tests are failing)
- [x] T012 [P] Create database migration for credit system in backend/migrations/001_add_credits.sql
- [x] T013 [P] User model extension in backend/src/models/User.js
- [x] T014 [P] CreditPack model in backend/src/models/CreditPack.js
- [x] T015 [P] CreditTransaction model in backend/src/models/CreditTransaction.js
- [x] T016 [P] PaymentTransaction model in backend/src/models/PaymentTransaction.js

## Phase 3.4: Core Services
- [x] T017 [P] CreditService for credit calculations in backend/src/services/CreditService.js
- [x] T018 [P] PaymentService for Stripe integration in backend/src/services/PaymentService.js
- [x] T019 Update LocalDatabaseService with credit methods in backend/src/services/LocalDatabaseService.js
- [x] T020 Credit enforcement middleware in backend/src/middleware/credits.js

## Phase 3.5: API Endpoints Implementation
- [x] T021 GET /api/users/me/usage endpoint in backend/src/api/users.js
- [x] T022 POST /api/payments/purchase-pack endpoint in backend/src/api/payments.js
- [x] T023 POST /api/payments/webhook endpoint in backend/src/api/payments.js
- [x] T024 GET /api/admin/users/{userId} endpoint in backend/src/api/admin.js
- [x] T025 GET /api/admin/users/{userId}/transactions endpoint in backend/src/api/admin.js
- [x] T026 POST /api/admin/users/{userId}/credits/adjust endpoint in backend/src/api/admin.js

## Phase 3.6: Credit Enforcement Integration
- [x] T027 Add credit checks to image generation in backend/src/api/cards.js
- [x] T028 Add credit checks to image regeneration in backend/src/api/cards.js
- [x] T029 Add credit checks to context generation in backend/src/api/contexts.js
- [x] T030 Add credit checks to collection saving in backend/src/api/collections.js
- [x] T031 Initialize 50 free credits for new users in backend/src/services/AuthService.js

## Phase 3.7: Frontend Components
- [ ] T032 [P] CreditBalance component in frontend/src/components/CreditBalance.tsx
- [ ] T033 [P] CreditPackPurchase component in frontend/src/components/CreditPackPurchase.tsx
- [ ] T034 [P] PaymentForm component in frontend/src/components/PaymentForm.tsx
- [ ] T035 [P] AdminUserManagement component in frontend/src/components/AdminUserManagement.tsx

## Phase 3.8: Frontend Pages & Context
- [ ] T036 [P] Billing page in frontend/src/pages/Billing.tsx
- [ ] T037 [P] Admin dashboard page in frontend/src/pages/Admin.tsx
- [ ] T038 [P] CreditContext for credit state management in frontend/src/context/CreditContext.tsx
- [ ] T039 [P] PaymentService client in frontend/src/services/PaymentService.ts

## Phase 3.9: Frontend Integration
- [ ] T040 Add credit balance display to main app in frontend/src/App.tsx
- [ ] T041 Add credit checks to image generation in frontend/src/components/ModernInputForm.tsx
- [ ] T042 Add insufficient credits error handling in frontend/src/context/AppContext.tsx
- [ ] T043 Add credit pack purchase flow to billing page in frontend/src/pages/Billing.tsx

## Phase 3.10: Admin Interface
- [ ] T044 Add admin routes to React Router in frontend/src/App.tsx
- [ ] T045 Add admin navigation to main layout in frontend/src/components/AppLayout.tsx
- [ ] T046 Add user search functionality to admin dashboard in frontend/src/pages/Admin.tsx
- [ ] T047 Add transaction history display to admin user management in frontend/src/components/AdminUserManagement.tsx

## Phase 3.11: Polish & Testing
- [ ] T048 [P] Unit tests for CreditService in backend/tests/services/test_credit_service.test.js
- [ ] T049 [P] Unit tests for PaymentService in backend/tests/services/test_payment_service.test.js
- [ ] T050 [P] Unit tests for credit calculations in backend/tests/unit/test_credit_math.test.js
- [ ] T051 Performance tests for credit operations (<100ms)
- [ ] T052 [P] Update README.md with credit system documentation
- [ ] T053 [P] Update API documentation with new endpoints
- [ ] T054 Run quickstart validation tests
- [ ] T055 End-to-end testing of complete credit flow

## Dependencies
- Tests (T004-T011) before implementation (T012-T031)
- Database migration (T012) blocks all model tasks (T013-T016)
- Models (T013-T016) block services (T017-T020)
- Services (T017-T020) block endpoints (T021-T026)
- Backend endpoints (T021-T026) block frontend integration (T040-T043)
- Implementation before polish (T048-T055)

## Parallel Execution Examples

### Phase 3.1 Setup (Parallel)
```
Task: "Add Stripe Node.js SDK to backend/package.json dependencies"
Task: "Add environment variables for Stripe configuration (.env.example)"
Task: "Create admin middleware in backend/src/middleware/admin.js"
```

### Phase 3.2 Tests (Parallel)
```
Task: "Contract test GET /api/users/me/usage in backend/tests/api/test_users_usage.test.js"
Task: "Contract test POST /api/payments/purchase-pack in backend/tests/api/test_payments_purchase.test.js"
Task: "Contract test POST /api/payments/webhook in backend/tests/api/test_payments_webhook.test.js"
Task: "Contract test GET /api/admin/users/{userId} in backend/tests/api/test_admin_users.test.js"
Task: "Contract test GET /api/admin/users/{userId}/transactions in backend/tests/api/test_admin_transactions.test.js"
Task: "Contract test POST /api/admin/users/{userId}/credits/adjust in backend/tests/api/test_admin_adjust.test.js"
Task: "Integration test credit consumption in backend/tests/integration/test_credit_consumption.test.js"
Task: "Integration test payment flow in backend/tests/integration/test_payment_flow.test.js"
```

### Phase 3.3 Models (Parallel)
```
Task: "User model extension in backend/src/models/User.js"
Task: "CreditPack model in backend/src/models/CreditPack.js"
Task: "CreditTransaction model in backend/src/models/CreditTransaction.js"
Task: "PaymentTransaction model in backend/src/models/PaymentTransaction.js"
```

### Phase 3.7 Frontend Components (Parallel)
```
Task: "CreditBalance component in frontend/src/components/CreditBalance.tsx"
Task: "CreditPackPurchase component in frontend/src/components/CreditPackPurchase.tsx"
Task: "PaymentForm component in frontend/src/components/PaymentForm.tsx"
Task: "AdminUserManagement component in frontend/src/components/AdminUserManagement.tsx"
```

### Phase 3.11 Polish (Parallel)
```
Task: "Unit tests for CreditService in backend/tests/services/test_credit_service.test.js"
Task: "Unit tests for PaymentService in backend/tests/services/test_payment_service.test.js"
Task: "Unit tests for credit calculations in backend/tests/unit/test_credit_math.test.js"
Task: "Update README.md with credit system documentation"
Task: "Update API documentation with new endpoints"
```

## Critical Path (Sequential Dependencies)
```
T001-T003 (Setup) → T004-T011 (Tests) → T012 (Migration) → T013-T016 (Models) → 
T017-T020 (Services) → T021-T026 (Endpoints) → T027-T031 (Integration) → 
T032-T043 (Frontend) → T044-T047 (Admin UI) → T048-T055 (Polish)
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing (TDD approach)
- Commit after each task for better tracking
- Credit precision: All calculations use integer storage (credits × 5)
- Payment processing: Use Stripe Checkout for PCI compliance
- Admin access: Firebase custom claims + environment variable fallback

## Task Generation Rules Applied
1. **From Contracts**: 6 endpoints → 6 contract tests + 6 implementation tasks
2. **From Data Model**: 4 entities → 4 model creation tasks
3. **From User Stories**: 10 scenarios → 2 integration tests + validation tasks
4. **From Research**: Stripe integration → setup and service tasks

## Validation Checklist
- [x] All contracts have corresponding tests
- [x] All entities have model tasks
- [x] All tests come before implementation
- [x] Parallel tasks truly independent
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task

---
**Total Tasks**: 55  
**Estimated Duration**: 2-3 weeks (depending on team size)  
**Critical Path Length**: ~15 sequential tasks  
**Max Parallel Tasks**: 8 (in test phase)