# Research: Credit Management System with Pack-based Pricing

**Feature**: `006-mettre-en-place` | **Date**: 2025-11-26  
**Status**: Complete  
**Scope**: Technical decisions for payment processing, admin management, and credit system implementation

---

## Payment Processing Integration

### Decision: Stripe Integration with PayPal as Future Option
**Rationale**: 
- Stripe offers comprehensive Node.js SDK with excellent documentation
- Built-in webhook handling for payment confirmation
- Strong security features and PCI compliance support
- Widely adopted in SaaS applications with proven patterns
- PayPal can be added later as additional payment option

**Alternatives Considered**:
- **PayPal only**: More complex SDK, less developer-friendly for recurring operations
- **Both Stripe + PayPal initially**: Increased complexity, longer development time
- **Custom payment gateway**: High maintenance burden, security concerns

### Implementation Notes:
- Use Stripe Checkout for hosted payment pages (reduces PCI compliance scope)
- Implement webhooks for payment confirmation (async credit allocation)
- Store Stripe customer IDs for repeat purchases
- Support both one-time payments and future subscription potential

---

## PCI Compliance Requirements

### Decision: Stripe Checkout + Minimal Card Data Handling
**Rationale**:
- Using Stripe Checkout significantly reduces PCI compliance scope
- No card data ever touches our servers - handled entirely by Stripe
- Simplifies security requirements and audits
- Industry-standard approach for SaaS applications

**Alternatives Considered**:
- **Direct card processing**: Full PCI compliance required, high security overhead
- **Payment Element**: More flexible but increases compliance scope

### Security Requirements:
- Never store or log cardholder data
- Use HTTPS everywhere (already implemented)
- Implement proper webhook signature verification
- Secure storage of API keys (environment variables)
- Rate limiting on payment endpoints

---

## Admin Role Management

### Decision: Firebase Custom Claims + Environment-based Admin List
**Rationale**:
- Leverages existing Firebase authentication system
- Custom claims provide efficient role checking
- Environment variable fallback for development/testing
- No additional authentication system needed

**Alternatives Considered**:
- **Database-based roles**: Additional query overhead, more complex management
- **Separate admin authentication**: Duplicate user management, UX fragmentation

### Implementation Pattern:
```javascript
// Admin check middleware
const isAdmin = (user) => {
  return user.customClaims?.admin === true || 
         process.env.ADMIN_USER_IDS?.includes(user.uid);
};
```

---

## Credit Transaction Atomicity

### Decision: SQLite Transactions with Row-Level Locking
**Rationale**:
- SQLite supports ACID transactions out of the box
- `BEGIN IMMEDIATE` provides row-level locking for concurrent operations
- Simple to implement with existing LocalDatabaseService pattern
- Proven pattern for financial operations in SQLite

**Alternatives Considered**:
- **Application-level locking**: Complex, error-prone, doesn't prevent race conditions
- **Optimistic concurrency**: Additional version columns, more complex logic

### Transaction Pattern:
```sql
BEGIN IMMEDIATE;
SELECT credits_balance FROM users WHERE user_id = ? FOR UPDATE;
-- Check sufficient credits
UPDATE users SET credits_balance = credits_balance - ? WHERE user_id = ?;
INSERT INTO credit_transactions (...) VALUES (...);
COMMIT;
```

---

## Fractional Credit Precision

### Decision: INTEGER Storage with 0.2 Credit Unit (Multiply by 5)
**Rationale**:
- SQLite handles integers more efficiently than decimals
- Avoids floating-point precision issues
- 0.2 credit precision maps perfectly to integer arithmetic (multiply by 5)
- Simple conversion functions for display

**Alternatives Considered**:
- **DECIMAL type**: SQLite doesn't have native DECIMAL, would need TEXT storage
- **FLOAT storage**: Precision issues with financial calculations
- **Separate integer/decimal columns**: Unnecessary complexity

### Implementation:
```javascript
// Convert between display and storage
const creditsToStorage = (credits) => Math.round(credits * 5);
const storageToCredits = (storage) => storage / 5;

// Example: 0.2 credits = 1 storage unit
// Example: 1 credit = 5 storage units
// Example: 14.6 credits = 73 storage units
```

---

## Database Schema Extensions

### Decision: Extend Existing Users Table + Add New Tables
**Rationale**:
- Minimal disruption to existing LocalDatabaseService
- Maintains backward compatibility
- Clear separation of concerns with dedicated transaction/pack tables

### Schema Additions:
```sql
-- Extend users table
ALTER TABLE users ADD COLUMN credits_balance INTEGER DEFAULT 250; -- 50 credits * 5
ALTER TABLE users ADD COLUMN total_images_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_cards_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_collections_saved INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_pdfs_exported INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_credits_spent INTEGER DEFAULT 0;

-- New tables
CREATE TABLE credit_packs (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  credit_amount INTEGER NOT NULL, -- stored as integer (credits * 5)
  price_cents INTEGER NOT NULL, -- price in cents
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL, -- 'purchase', 'initial_grant', 'consumption', 'refund'
  source TEXT NOT NULL, -- 'stripe', 'image_generation', 'regeneration', etc.
  amount INTEGER NOT NULL, -- stored as integer (credits * 5)
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

---

## Error Handling and Edge Cases

### Decision: Standardized Error Responses + Comprehensive Logging
**Rationale**:
- Consistent error handling across all credit-related endpoints
- Detailed logging for audit trails and debugging
- Clear user feedback for insufficient credits scenarios

### Error Response Format:
```javascript
{
  error: 'Not enough credits',
  code: 'INSUFFICIENT_CREDITS',
  details: {
    required: 5, // credits needed (in display units)
    available: 2.4, // credits available (in display units)
    operation: 'image_generation'
  }
}
```

---

## Performance Considerations

### Decision: Optimized Queries + Caching for Balance Display
**Rationale**:
- Credit balance checks happen frequently during operations
- Transaction history can be expensive for large datasets
- Balance display should be fast for UI responsiveness

### Optimizations:
- Index on user_id for transaction queries
- Cached balance calculations with periodic refresh
- Pagination for transaction history endpoints
- Batch operations for multiple credit consumptions

---

## Migration Strategy

### Decision: Incremental Migration with Backward Compatibility
**Rationale**:
- Existing users need seamless transition
- Database migrations must be safe and reversible
- Feature flags for gradual rollout

### Migration Steps:
1. Add new columns/tables with safe ALTER TABLE statements
2. Initialize existing users with 50 free credits
3. Deploy new API endpoints alongside existing ones
4. Gradually enable credit enforcement by feature
5. Remove old credit-free paths once migration is complete

---

## Research Summary

All technical unknowns have been resolved with practical, proven solutions:

✅ **Payment Processing**: Stripe Checkout with webhook handling  
✅ **PCI Compliance**: Minimal scope using hosted payment pages  
✅ **Admin Management**: Firebase custom claims + environment fallback  
✅ **Transaction Atomicity**: SQLite IMMEDIATE transactions  
✅ **Fractional Precision**: Integer storage (multiply by 5)  
✅ **Database Schema**: Extend existing users + add dedicated tables  
✅ **Error Handling**: Standardized responses with detailed feedback  
✅ **Performance**: Optimized queries and balance caching  
✅ **Migration**: Incremental with backward compatibility  

The research confirms that this feature can be implemented with **moderate complexity** using existing infrastructure patterns and well-established third-party services.