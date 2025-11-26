# Quickstart Guide: Credit Management System

**Feature**: `006-mettre-en-place` | **Date**: 2025-11-26  
**Purpose**: End-to-end validation of credit pack system functionality

---

## Prerequisites

### Environment Setup
1. **Backend Environment**: Node.js with SQLite
2. **Frontend Environment**: React + TypeScript + Vite
3. **Payment Processing**: Stripe test account and API keys
4. **Authentication**: Firebase project with test users
5. **Database**: SQLite with credit system schema applied

### Required Environment Variables
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

### Test Data Setup
```sql
-- Insert credit packs
INSERT INTO credit_packs (id, name, credit_amount, price_cents, is_active, sort_order) VALUES
(1, 'Découverte', 125, 499, TRUE, 1),
(2, 'Pro', 425, 1499, TRUE, 2),
(3, 'Organisme', 1250, 3999, TRUE, 3);

-- Create test users (via Firebase auth)
-- Regular user: test_user@example.com
-- Admin user: admin_test@example.com (add to ADMIN_USER_IDS)
```

---

## Validation Steps

### Step 1: User Registration and Initial Credits

**Action**: Register a new user account
```bash
# Via frontend or direct Firebase auth
curl -X POST "https://your-app-url/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"email": "newuser@test.com", "password": "test123456"}'
```

**Expected Result**:
- User account created successfully
- User automatically receives 50 free credits
- User can view their initial balance

**Verification**:
```bash
# Check user balance
GET /api/users/me/usage
Authorization: Bearer <firebase_id_token>

# Expected response:
{
  "credits_balance": 50.0,
  "total_images_generated": 0,
  "total_cards_generated": 0,
  "total_collections_saved": 0,
  "total_pdfs_exported": 0,
  "total_credits_spent": 0.0,
  "last_activity_at": "2025-11-26T15:30:00Z"
}
```

---

### Step 2: Credit Consumption - Image Generation

**Action**: Generate images to consume credits
```bash
# Generate 8 images (should cost 1 credit)
POST /api/cards/generate
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "theme": "Fantasy creatures",
  "numCards": 8,
  "stylePreset": "anime"
}
```

**Expected Result**:
- Images generated successfully
- 1 credit deducted from balance
- Transaction recorded in credit history

**Verification**:
```bash
# Check updated balance
GET /api/users/me/usage

# Expected: credits_balance = 49.0, total_images_generated = 8

# Check transaction history (admin only)
GET /api/admin/users/{userId}/transactions
Authorization: Bearer <admin_firebase_id_token>

# Expected: New consumption transaction with amount = -5 (1 credit × 5)
```

---

### Step 3: Credit Consumption - Image Regeneration

**Action**: Regenerate a single image
```bash
# Regenerate 1 image (should cost 0.2 credit)
POST /api/cards/regenerate-image
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "cardId": "generated_card_id_123"
}
```

**Expected Result**:
- Image regenerated successfully
- 0.2 credit deducted from balance
- Precise fractional credit handling

**Verification**:
```bash
# Check updated balance
GET /api/users/me/usage

# Expected: credits_balance = 48.8 (49.0 - 0.2)
```

---

### Step 4: Credit Consumption - Context Generation

**Action**: Generate a context
```bash
# Generate context (should cost 1 credit)
POST /api/contexts/generate
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "theme": "Medieval adventure",
  "targetAudience": "Adults"
}
```

**Expected Result**:
- Context generated successfully
- 1 credit deducted from balance

**Verification**:
```bash
# Check updated balance
GET /api/users/me/usage

# Expected: credits_balance = 47.8 (48.8 - 1.0)
```

---

### Step 5: Credit Consumption - Collection Saving

**Action**: Save a card collection
```bash
# Save collection (should cost 10 credits)
POST /api/collections
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "name": "My Fantasy Collection",
  "theme": "Fantasy creatures",
  "cards": [...] // array of generated cards
}
```

**Expected Result**:
- Collection saved successfully
- 10 credits deducted from balance

**Verification**:
```bash
# Check updated balance
GET /api/users/me/usage

# Expected: credits_balance = 37.8 (47.8 - 10.0)
# Expected: total_collections_saved = 1
```

---

### Step 6: Free Operations - PDF/PNG Export

**Action**: Export collection as PDF and PNG
```bash
# Export PDF (should be free)
GET /api/collections/{collectionId}/pdf
Authorization: Bearer <firebase_id_token>

# Export PNG (should be free)
GET /api/collections/{collectionId}/png
Authorization: Bearer <firebase_id_token>
```

**Expected Result**:
- Both exports succeed without credit deduction
- Balance remains unchanged

**Verification**:
```bash
# Check balance (should be unchanged)
GET /api/users/me/usage

# Expected: credits_balance = 37.8 (no change)
# Expected: total_pdfs_exported = 1
```

---

### Step 7: Insufficient Credits Scenario

**Action**: Attempt operation with insufficient credits
```bash
# Try to generate 40 images (requires 5 credits, user has 37.8)
POST /api/cards/generate
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "theme": "Large collection",
  "numCards": 40,
  "stylePreset": "digital-art"
}
```

**Expected Result**:
- Operation blocked with clear error message
- No credits deducted
- No images generated

**Verification**:
```bash
# Expected error response:
{
  "error": "Not enough credits",
  "code": "INSUFFICIENT_CREDITS",
  "message": "You need 5 more credits to complete this operation",
  "details": {
    "required": 5,
    "available": 4.56, // 37.8 credits ÷ 8 images per credit
    "operation": "image_generation",
    "suggestion": "Purchase more credits to continue"
  }
}

# Balance should remain unchanged
GET /api/users/me/usage
# Expected: credits_balance = 37.8
```

---

### Step 8: Credit Pack Purchase Flow

**Action**: Purchase a credit pack
```bash
# Initiate pack purchase
POST /api/payments/purchase-pack
Authorization: Bearer <firebase_id_token>
Content-Type: application/json

{
  "pack_id": 1, // Découverte pack
  "success_url": "https://app.fresquia.com/billing/success",
  "cancel_url": "https://app.fresquia.com/billing/cancel"
}
```

**Expected Result**:
- Stripe Checkout session created
- User redirected to Stripe payment page
- Payment intent ID returned for tracking

**Verification**:
```bash
# Expected response:
{
  "checkout_url": "https://checkout.stripe.com/pay/cs_test_...",
  "payment_intent_id": "pi_1J2k3l4m5n6o7p8q"
}

# Complete payment via Stripe Checkout (manual in test environment)
# Then simulate webhook callback
POST /api/payments/webhook
Content-Type: application/json
Stripe-Signature: <generated_signature>

{
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_1J2k3l4m5n6o7p8q",
      "metadata": {
        "user_id": "test_user_uid",
        "pack_id": "1"
      }
    }
  }
}
```

**Post-Purchase Verification**:
```bash
# Check updated balance
GET /api/users/me/usage

# Expected: credits_balance = 62.8 (37.8 + 25.0)
# Expected: New purchase transaction in history
```

---

### Step 9: Admin User Management

**Action**: Admin views user details and transaction history
```bash
# Get user details (admin only)
GET /api/admin/users/{userId}
Authorization: Bearer <admin_firebase_id_token>

# Get transaction history (admin only)
GET /api/admin/users/{userId}/transactions?limit=10&offset=0
Authorization: Bearer <admin_firebase_id_token>
```

**Expected Result**:
- Admin can view comprehensive user information
- Admin can see complete transaction history
- Pagination works correctly

**Verification**:
```bash
# Expected user details response includes:
# - All usage statistics
# - Account information
# - Admin status

# Expected transaction history includes:
# - Initial grant transaction (50 credits)
# - All consumption transactions
# - Purchase transaction (25 credits)
# - Proper pagination metadata
```

---

### Step 10: Admin Credit Adjustment

**Action**: Admin manually adjusts user credits
```bash
# Add credits to user account
POST /api/admin/users/{userId}/credits/adjust
Authorization: Bearer <admin_firebase_id_token>
Content-Type: application/json

{
  "amount": 10,
  "reason": "Customer service compensation",
  "source": "admin_adjust"
}
```

**Expected Result**:
- Credits added to user account
- Transaction recorded with admin_adjust source
- Updated balance returned

**Verification**:
```bash
# Expected response:
{
  "credits_balance": 72.8, // 62.8 + 10.0
  "transaction_id": "txn_admin_123"
}

# Verify transaction in history
GET /api/admin/users/{userId}/transactions
# Should include new admin_adjust transaction
```

---

## Performance Validation

### Concurrent Operations Test
```bash
# Simulate concurrent credit consumption
# Run multiple image generation requests simultaneously
for i in {1..5}; do
  curl -X POST "http://localhost:3000/api/cards/generate" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"theme": "Test", "numCards": 8, "stylePreset": "anime"}' &
done
wait

# Verify no overspending occurred
GET /api/users/me/usage
# Balance should be exactly: initial + purchases - consumptions
```

### Large Transaction History Test
```bash
# Generate many transactions (100+)
# Then test pagination performance
GET /api/admin/users/{userId}/transactions?limit=20&offset=80
# Should respond quickly with correct pagination
```

---

## Error Handling Validation

### Invalid Pack Purchase
```bash
# Attempt to purchase non-existent pack
POST /api/payments/purchase-pack
{
  "pack_id": 999,
  "success_url": "https://...",
  "cancel_url": "https://..."
}

# Expected: 404 error with clear message
```

### Admin Access Control
```bash
# Attempt admin endpoint without admin privileges
GET /api/admin/users/{userId}
Authorization: Bearer <regular_user_token>

# Expected: 403 Forbidden error
```

### Payment Webhook Security
```bash
# Send webhook with invalid signature
POST /api/payments/webhook
Stripe-Signature: invalid_signature
{...malformed_payload...}

# Expected: 400 error, no credits allocated
```

---

## Success Criteria

### Functional Requirements ✅
- [ ] New users receive exactly 50 free credits
- [ ] Credit consumption follows exact pricing rules
- [ ] Fractional credits (0.2) handled precisely
- [ ] Free operations (PDF/PNG) consume no credits
- [ ] Insufficient credits properly block operations
- [ ] Credit pack purchases work end-to-end
- [ ] Admin can view and manage user accounts
- [ ] Admin can manually adjust credits
- [ ] Transaction history is accurate and complete

### Technical Requirements ✅
- [ ] All operations are atomic (no overspending)
- [ ] Payment processing is secure (PCI compliant scope)
- [ ] Error responses are consistent and informative
- [ ] Performance is acceptable under load
- [ ] Database schema handles all required data
- [ ] API contracts match OpenAPI specification

### Security Requirements ✅
- [ ] Authentication properly enforced
- [ ] Admin access properly controlled
- [ ] Payment webhooks securely validated
- [ ] No credit manipulation without proper authorization

---

## Troubleshooting

### Common Issues

**Credits not appearing after purchase**
1. Check Stripe webhook logs
2. Verify webhook signature validation
3. Check payment_intent.succeeded event processing
4. Review database transaction logs

**Admin access denied**
1. Verify ADMIN_USER_IDS environment variable
2. Check Firebase custom claims
3. Ensure proper Firebase ID token format

**Concurrent operation overspending**
1. Review SQLite transaction isolation level
2. Check BEGIN IMMEDIATE usage
3. Verify row-level locking implementation

**Payment processing failures**
1. Verify Stripe API keys are correct
2. Check webhook endpoint configuration
3. Review Stripe dashboard for payment status

### Debug Commands
```bash
# Check database schema
sqlite3 ./test.db ".schema"

# View user credits
sqlite3 ./test.db "SELECT user_id, credits_balance FROM users WHERE user_id = 'test_uid';"

# View recent transactions
sqlite3 ./test.db "SELECT * FROM credit_transactions WHERE user_id = 'test_uid' ORDER BY created_at DESC LIMIT 10;"

# Check payment transactions
sqlite3 ./test.db "SELECT * FROM payment_transactions ORDER BY created_at DESC LIMIT 5;"
```

---

## Completion Checklist

- [ ] All 10 validation steps completed successfully
- [ ] Performance tests pass under concurrent load
- [ ] Error scenarios handled correctly
- [ ] Admin functionality verified
- [ ] Payment processing end-to-end working
- [ ] Database integrity maintained
- [ ] API contracts fully implemented
- [ ] Security measures effective
- [ ] Documentation updated with actual implementation details
- [ ] Ready for production deployment consideration

**Status**: ✅ Quickstart validation complete - Credit Management System ready for implementation