-- Migration 001: Add Credit Management System
-- Adds credit system tables and extends existing users table
-- Date: 2025-11-26
-- Branch: 006-mettre-en-place

-- Extend existing users table with credit fields
ALTER TABLE users ADD COLUMN credits_balance INTEGER DEFAULT 250; -- 50 credits × 5 (stored as integer)
ALTER TABLE users ADD COLUMN total_images_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_cards_generated INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_collections_saved INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_pdfs_exported INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN total_credits_spent INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users ADD COLUMN last_activity_at DATETIME DEFAULT CURRENT_TIMESTAMP;

-- Create credit_packs table for predefined credit packages
CREATE TABLE IF NOT EXISTS credit_packs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  credit_amount INTEGER NOT NULL, -- stored as credits × 5 (e.g., 25 credits = 125)
  price_cents INTEGER NOT NULL, -- price in cents (e.g., 4.99€ = 499)
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  description TEXT,
  features TEXT, -- JSON array of included features
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create credit_transactions table for audit log
CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY, -- UUID or unique identifier
  user_id TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('initial_grant', 'purchase', 'consumption', 'refund', 'admin_adjust')),
  source TEXT NOT NULL, -- e.g., 'stripe', 'image_generation', 'context_generation', 'admin_manual'
  amount INTEGER NOT NULL, -- stored as credits × 5 (positive for addition, negative for consumption)
  payload TEXT, -- JSON metadata (e.g., pack_id, operation details, admin reason)
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create payment_transactions table for payment processing records
CREATE TABLE IF NOT EXISTS payment_transactions (
  id TEXT PRIMARY KEY, -- UUID or unique identifier
  user_id TEXT NOT NULL,
  stripe_payment_intent_id TEXT,
  stripe_session_id TEXT,
  amount_cents INTEGER NOT NULL, -- payment amount in cents
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert default credit packs
INSERT OR IGNORE INTO credit_packs (id, name, credit_amount, price_cents, is_active, sort_order, description) VALUES
(1, 'Découverte', 125, 499, TRUE, 1, 'Perfect for trying out our card generation features'),
(2, 'Pro', 425, 1499, TRUE, 2, 'Ideal for regular users and small projects'),
(3, 'Organisme', 1250, 3999, TRUE, 3, 'Best value for educational institutions and organizations');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_id ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_created_at ON credit_transactions(created_at);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_user_id ON payment_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_status ON payment_transactions(status);
CREATE INDEX IF NOT EXISTS idx_users_credits_balance ON users(credits_balance);

-- Create triggers for updated_at timestamps
CREATE TRIGGER IF NOT EXISTS update_credit_packs_updated_at
  AFTER UPDATE ON credit_packs
  FOR EACH ROW
  BEGIN
    UPDATE credit_packs SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER IF NOT EXISTS update_payment_transactions_updated_at
  AFTER UPDATE ON payment_transactions
  FOR EACH ROW
  BEGIN
    UPDATE payment_transactions SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

-- Create trigger to update last_activity_at on user changes
CREATE TRIGGER IF NOT EXISTS update_users_last_activity_at
  AFTER UPDATE ON users
  FOR EACH ROW
  BEGIN
    UPDATE users SET last_activity_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;