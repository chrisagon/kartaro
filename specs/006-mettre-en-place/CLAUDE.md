# Claude Code Context

**Project**: Fresquia Credit Management System  
**Branch**: `006-mettre-en-place`  
**Last Updated**: 2025-11-26

## System Overview

Fresquia is a web application for generating educational card collections with images and contexts. The credit management system introduces commercial features allowing users to purchase credit packs and consume credits for various operations.

## Architecture

**Backend**: Node.js + Express + SQLite  
**Frontend**: React + TypeScript + Vite  
**Authentication**: Firebase Auth  
**Payment Processing**: Stripe Checkout  
**Database**: SQLite with LocalDatabaseService pattern

## Key Directories

```
backend/
├── src/
│   ├── api/
│   │   ├── cards.js          # card generation + PDF for unsaved cards
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
│       ├── LocalDatabaseService.js # SQLite access, services
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
```

## Database Schema

### Users Table (Extended)
```sql
ALTER TABLE users ADD COLUMN credits_balance INTEGER DEFAULT 250; -- 50 credits × 5
ALTER TABLE users ADD COLUMN total_images_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_cards_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_collections_saved INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_pdfs_exported INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_credits_spent INTEGER DEFAULT 0;
```

### New Tables
```sql
CREATE TABLE credit_packs (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  credit_amount INTEGER NOT NULL, -- stored as credits × 5
  price_ccents INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL, -- 'initial_gr', 'purchase', 'consumption', 'refund', 'admin_adjust'
  source TEXT NOT NULL,
  amount INTEGER NOT NULL, -- stored as credits × 5
  payload TEXT, -- JSON metadata
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE payment_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  stripe_payment_intent_id TEXT,
  stripe_session_id TEXT,
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL, -- 'pending', 'completed', 'failed', 'refunded'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

## API Endpoints

### User Endpoints
- `GET /api/users/me/usage` - Get credit balance and usage stats
- `POST /api/payments/purchase-pack` - Purchase credit pack (Stripe Checkout)
- `POST /api/payments/webhook` - Stripe webhook handler

### Admin Endpoints
- `GET /api/admin/users/{userId}` - Get user details
- `GET /api/admin/users/{userId}/transactions` - Get transaction history
- `POST /api/admin/users/{userId}/credits/adjust` - Manual credit adjustment

## Credit System Rules

### Credit Costs (Display Units)
- Image Generation: 1 credit per 8 images
- Image Regeneration: 0.2 credit per image
- Context Generation: 1 credit per context
- Collection Saving: 10 credits per collection
- PDF/PNG Export: FREE

### Storage Conversion
All credits stored as integers (multiply by 5):
- 0.2 credits = 1 storage
- 1.0 credits = 5
- 10 credits = 50
- 25 credits = 125
- 85 credits = 425

## Payment Processing

### Stripe Integration
- Use Stripe Checkout for hosted payment pages
- Webhook signature validation for payment confirmation
- Store Stripe customer IDs for repeat purchases
- Handle payment_intent.succeeded events

### Credit Pack Pricing
- Découverte: 25 credits (€4.99)
- Pro: 85 credits (€14.99)
- Organisme: 250 credits (€39.99)
- Sur-mesure: Custom pricing (contact required required)

## Security Considerations

- PCI compliance: Use Stripe Checkout (minimal card datadata handling)
- Admin access: Firebase custom claims + environment variable fallback
- Webhook signature verification validation
- Credit transaction atomicity with SQLite IMMEDIATE transactions
- Rate limiting on payment endpoints

## Testing Strategy

### Unit Tests
- Credit calculation precision (multiply by 5)
- Transaction atomicity under concurrent operations
- Admin permission verification
- Payment webhook signature validation

### Integration Tests
- End-to-end credit pack purchase flow
- Credit consumption for each operation type
- Admin user management operations
- Error scenarios (insufficient credits, payment failures)

## Implementation Tasks

### Phase 1: Database & Core Services
1. **Database Schema Migration** - Extend users table, create credit tables
2. **Credit Service** - Implement credit calculation and enforcement logic
3. **Payment Service** - Stripe integration with webhook handling
4. **Admin Middleware** - Firebase custom claims verification

### Phase 2: API Endpoints
5. **User Usage Endpoint** - GET /api/users/me/usage
6. **Payment Endpoints** - Purchase initiation, webhook handler
7. **Admin Endpoints** - User management, transaction history, credit adjustment

### Phase 3: Frontend Integration
8. **Credit Balance Display** - Show current credits prominently
9. **Purchase Flow** - Credit pack selection, Stripe Checkout integration
10. **Admin Interface** - User management dashboard
11. **Error Handling** - Insufficient credits messaging

## Recent Changes

### Credit Management System (006-mettre-en-place)
- Added credit pack purchasing functionality
- Implemented credit consumption for image generation, regeneration, context generation, and collection saving
- Created admin interface for user credit management
- Integrated Stripe Checkout for payment processing
- Added fractional credit support (0.2 precision)
- Implemented transaction history and usage tracking

## Environment Variables

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Firebase Configuration
FIREBASE_PROJECT_ID=your-test-project
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-...

# Admin Configuration
ADMIN_USER_IDS=admin_uid_1,admin_uid_2

# Application Configuration
NODE_ENV=development
DATABASE_URL=./test.db
```

## Debug Commands

```bash
# Check database schema
sqlite3 ./test.db ".schema"

# View user credits
sqlite3 ./test.db "SELECT user_id, credits_balance FROM users WHERE user_id = 'test_uid';"

# View recent transactions
sqlite3 ./test.db "SELECT * FROM credit_transactions WHERE user_id = 'test_uid' ORDER BY created_at DESC LIMIT 10;"
```

---

**Last Updated**: 2025-11-26  
**Status**: In Development - Credit Management System feature