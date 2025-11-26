const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Initialize database connection
const dbPath = process.env.DATABASE_PATH || path.join(__dirname, '..', '..', 'data', 'database.db');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath);

let isDbClosed = false;

const closeDatabase = () => {
  if (isDbClosed) {
    return;
  }

  db.close((err) => {
    if (err) {
      console.error('Error closing database connection:', err);
    }
  });

  isDbClosed = true;
};

// Enable foreign keys
db.run('PRAGMA foreign_keys = ON');

// Helper function to generate random ID
const ensureRandomId = () => {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const mapCollectionSummaryRow = (row) => ({
  id: row.id,
  userId: row.user_id,
  name: row.name,
  description: row.description || '',
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  isPublic: Boolean(row.is_public),
  theme: row.theme || '',
  publicTarget: row.publicTarget || '',
  context: row.context || '',
  cardCount: row.cardCount != null ? Number(row.cardCount) : undefined,
});

const COLLECTION_SUMMARY_FIELDS = `
  id,
  user_id,
  name,
  created_at,
  updated_at,
  is_public,
  json_extract(data, '$.description') as description,
  json_extract(data, '$.theme') as theme,
  json_extract(data, '$.publicTarget') as publicTarget,
  json_extract(data, '$.context') as context,
  json_array_length(json_extract(data, '$.cards')) as cardCount
`;

const ensureUserExists = async (userId) => {
  if (!userId) {
    throw new Error('User ID is required to ensure existence');
  }

  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.get('SELECT id FROM users WHERE id = ? LIMIT 1', [userId], (err, row) => {
      if (err) {
        return reject(err);
      }

      if (row) {
        return resolve(row.id);
      }

      const now = new Date().toISOString();
      db.run(
        `INSERT INTO users (
           id,
           username,
           password,
           created_at,
           updated_at,
           credits_balance,
           total_images_generated,
           total_cards_generated,
           total_collections_saved,
           total_pdfs_exported,
           total_credits_spent,
           last_activity_at
         ) VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0, 0, 0, NULL)`,
        [userId, userId, '', now, now, 50],
        function(insertErr) {
          if (insertErr) {
            return reject(insertErr);
          }
          resolve(userId);
        }
      );
    });
  });
};

// Initialize database schema
const initializeSchema = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          username TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          credits_balance INTEGER NOT NULL DEFAULT 0,
          total_images_generated INTEGER NOT NULL DEFAULT 0,
          total_cards_generated INTEGER NOT NULL DEFAULT 0,
          total_collections_saved INTEGER NOT NULL DEFAULT 0,
          total_pdfs_exported INTEGER NOT NULL DEFAULT 0,
          total_credits_spent INTEGER NOT NULL DEFAULT 0,
          last_activity_at TEXT
        )
      `, (err) => {
        if (err) return reject(err);
      });

      db.run(
        'ALTER TABLE users ADD COLUMN credits_balance INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN total_images_generated INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN total_cards_generated INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN total_collections_saved INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN total_pdfs_exported INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN total_credits_spent INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(
        'ALTER TABLE users ADD COLUMN last_activity_at TEXT',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(`
        CREATE TABLE IF NOT EXISTS collections (
          id TEXT PRIMARY KEY,
          user_id TEXT NOT NULL,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          is_public INTEGER NOT NULL DEFAULT 0,
          data TEXT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id)
        )
      `, (err) => {
        if (err) return reject(err);
      });

      db.run(`
        CREATE TABLE IF NOT EXISTS credit_transactions (
          id TEXT PRIMARY KEY,
          user_id TEXT NOT NULL,
          type TEXT NOT NULL,
          source TEXT NOT NULL,
          credits INTEGER NOT NULL,
          payload TEXT,
          created_at TEXT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id)
        )
      `, (err) => {
        if (err) return reject(err);
      });

      db.run(
        'CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_created_at ON credit_transactions (user_id, created_at)',
        (err) => {
          if (err) return reject(err);
        }
      );

      db.run(
        'ALTER TABLE collections ADD COLUMN is_public INTEGER NOT NULL DEFAULT 0',
        (err) => {
          if (err && !/duplicate column name/i.test(err.message)) {
            return reject(err);
          }
        }
      );

      db.run(`
        CREATE INDEX IF NOT EXISTS idx_collections_user ON collections (user_id)
      `, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });
};

const normaliseCollectionPayload = (userId, collectionData) => {
  const now = new Date().toISOString();
  const metadata = collectionData?.metadata || {};

  return {
    ...collectionData,
    id: collectionData.id || ensureRandomId(),
    userId,
    createdAt: collectionData.createdAt || now,
    updatedAt: collectionData.updatedAt || now,
    isPublic: Boolean(collectionData.isPublic),
    theme: collectionData.theme ?? metadata.theme ?? collectionData.name ?? '',
    publicTarget: collectionData.publicTarget ?? metadata.publicTarget ?? '',
    context: collectionData.context ?? metadata.context ?? '',
    description: collectionData.description ?? metadata.description ?? collectionData.description ?? '',
  };
};

const saveCollection = async (userId, collectionData) => {
  await initializeSchema();
  await ensureUserExists(userId);
  const collection = normaliseCollectionPayload(userId, collectionData);

  const existing = await new Promise((resolve) => {
    db.get(
      `SELECT data FROM collections
         WHERE id = ? AND user_id = ?
         LIMIT 1`,
      [collection.id, userId],
      (err, row) => {
        if (err || !row) {
          resolve(null);
        } else {
          try {
            resolve(JSON.parse(row.data));
          } catch (parseErr) {
            console.error('Failed to parse existing collection payload:', parseErr);
            resolve(null);
          }
        }
      }
    );
  });

  const collectionToPersist = existing
    ? {
        ...existing,
        ...collection,
        cards: collection.cards ?? existing.cards ?? [],
      }
    : collection;

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT OR REPLACE INTO collections (id, user_id, name, created_at, updated_at, is_public, data)
       VALUES (?, ?, ?, ?, ?, ?, ?)` ,
      [
        collectionToPersist.id,
        collectionToPersist.userId,
        collectionToPersist.name,
        collectionToPersist.createdAt,
        collectionToPersist.updatedAt,
        collectionToPersist.isPublic ? 1 : 0,
        JSON.stringify(collectionToPersist)
      ],
      function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(collectionToPersist);
        }
      }
    );
  });
};

const getCollections = async (userId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT ${COLLECTION_SUMMARY_FIELDS}
       FROM collections
       WHERE user_id = ?
       ORDER BY datetime(created_at) DESC`,
      [userId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows.map(mapCollectionSummaryRow));
        }
      }
    );
  });
};

const getPublicCollections = async (excludeUserId = null) => {
  await initializeSchema();

  const sql = excludeUserId
    ? `SELECT ${COLLECTION_SUMMARY_FIELDS}
         FROM collections
         WHERE is_public = 1 AND user_id != ?
         ORDER BY datetime(created_at) DESC`
    : `SELECT ${COLLECTION_SUMMARY_FIELDS}
         FROM collections
         WHERE is_public = 1
         ORDER BY datetime(created_at) DESC`;

  const params = excludeUserId ? [excludeUserId] : [];

  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows.map(mapCollectionSummaryRow));
      }
    });
  });
};

const getCollectionByIdAnyUser = async (collectionId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT data FROM collections
         WHERE id = ?
         LIMIT 1`,
      [collectionId],
      (err, row) => {
        if (err) {
          reject(err);
        } else if (!row) {
          const error = new Error('Collection not found');
          error.status = 404;
          reject(error);
        } else {
          resolve(JSON.parse(row.data));
        }
      }
    );
  });
};

const getPublicCollectionById = async (collectionId) => {
  const collection = await getCollectionByIdAnyUser(collectionId);

  if (!collection.isPublic) {
    const error = new Error('Collection is not public');
    error.status = 403;
    throw error;
  }

  return collection;
};

const getCollectionById = async (userId, collectionId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT data FROM collections
       WHERE id = ? AND user_id = ?
       LIMIT 1`,
      [collectionId, userId],
      (err, row) => {
        if (err) {
          reject(err);
        } else if (!row) {
          const error = new Error('Collection not found');
          error.status = 404;
          reject(error);
        } else {
          resolve(JSON.parse(row.data));
        }
      }
    );
  });
};

const updateCollection = async (userId, collectionData) => {
  return saveCollection(userId, collectionData);
};

const deleteCollection = async (userId, collectionId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.run(
      'DELETE FROM collections WHERE id = ? AND user_id = ?',
      [collectionId, userId],
      function(err) {
        if (err) {
          reject(err);
        } else if (this.changes === 0) {
          const error = new Error('Collection not found');
          error.status = 404;
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};

const getUserUsage = async (userId) => {
  if (!userId) {
    throw new Error('User ID is required to get usage');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT
         id,
         credits_balance,
         total_images_generated,
         total_cards_generated,
         total_collections_saved,
         total_pdfs_exported,
         total_credits_spent,
         last_activity_at,
         created_at,
         updated_at
       FROM users
       WHERE id = ?
       LIMIT 1`,
      [userId],
      (err, row) => {
        if (err) {
          return reject(err);
        }

        if (!row) {
          const error = new Error('User not found');
          error.status = 404;
          return reject(error);
        }

        resolve({
          userId: row.id,
          creditsBalance: Number(row.credits_balance ?? 0),
          totalImagesGenerated: Number(row.total_images_generated ?? 0),
          totalCardsGenerated: Number(row.total_cards_generated ?? 0),
          totalCollectionsSaved: Number(row.total_collections_saved ?? 0),
          totalPdfsExported: Number(row.total_pdfs_exported ?? 0),
          totalCreditsSpent: Number(row.total_credits_spent ?? 0),
          lastActivityAt: row.last_activity_at || null,
          createdAt: row.created_at,
          updatedAt: row.updated_at,
        });
      }
    );
  });
};

const applyCreditChangeAndUsage = async (userId, options = {}) => {
  const {
    requiredCredits = 0,
    usageDeltas = {},
    transaction = null,
  } = options;

  if (!userId) {
    throw new Error('User ID is required to apply credit changes');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const now = new Date().toISOString();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION', (beginErr) => {
        if (beginErr) {
          return reject(beginErr);
        }

        db.get(
          `SELECT
             id,
             credits_balance,
             total_images_generated,
             total_cards_generated,
             total_collections_saved,
             total_pdfs_exported,
             total_credits_spent
           FROM users
           WHERE id = ?
           LIMIT 1`,
          [userId],
          (selectErr, row) => {
            if (selectErr) {
              return db.run('ROLLBACK', () => reject(selectErr));
            }

            if (!row) {
              const error = new Error('User not found');
              error.status = 404;
              return db.run('ROLLBACK', () => reject(error));
            }

            const currentBalance = Number(row.credits_balance || 0);
            const spend = Number(requiredCredits || 0);

            if (spend > 0 && currentBalance < spend) {
              const error = new Error('Not enough credits');
              error.code = 'INSUFFICIENT_CREDITS';
              error.status = 402;
              return db.run('ROLLBACK', () => reject(error));
            }

            const updatedBalance = currentBalance - spend;
            const imagesDelta = Number(usageDeltas.images || 0);
            const cardsDelta = Number(usageDeltas.cards || 0);
            const collectionsDelta = Number(usageDeltas.collections || 0);
            const pdfsDelta = Number(usageDeltas.pdfs || 0);

            const updatedImages = Number(row.total_images_generated || 0) + imagesDelta;
            const updatedCards = Number(row.total_cards_generated || 0) + cardsDelta;
            const updatedCollections = Number(row.total_collections_saved || 0) + collectionsDelta;
            const updatedPdfs = Number(row.total_pdfs_exported || 0) + pdfsDelta;
            const updatedTotalSpent = Number(row.total_credits_spent || 0) + spend;

            db.run(
              `UPDATE users
                 SET credits_balance = ?,
                     total_images_generated = ?,
                     total_cards_generated = ?,
                     total_collections_saved = ?,
                     total_pdfs_exported = ?,
                     total_credits_spent = ?,
                     last_activity_at = ?,
                     updated_at = ?
               WHERE id = ?`,
              [
                updatedBalance,
                updatedImages,
                updatedCards,
                updatedCollections,
                updatedPdfs,
                updatedTotalSpent,
                now,
                now,
                userId,
              ],
              (updateErr) => {
                if (updateErr) {
                  return db.run('ROLLBACK', () => reject(updateErr));
                }

                const shouldInsertTransaction =
                  transaction && typeof transaction.credits === 'number' && transaction.credits !== 0;

                if (!shouldInsertTransaction) {
                  return db.run('COMMIT', (commitErr) => {
                    if (commitErr) {
                      return reject(commitErr);
                    }

                    resolve({
                      userId,
                      creditsBalance: updatedBalance,
                      totalImagesGenerated: updatedImages,
                      totalCardsGenerated: updatedCards,
                      totalCollectionsSaved: updatedCollections,
                      totalPdfsExported: updatedPdfs,
                      totalCreditsSpent: updatedTotalSpent,
                    });
                  });
                }

                const txId = ensureRandomId();
                const txType = transaction.type || (transaction.credits > 0 ? 'earn' : 'spend');
                const txSource = transaction.source || 'unknown';
                const txPayload = transaction.payload ? JSON.stringify(transaction.payload) : null;

                db.run(
                  `INSERT INTO credit_transactions (
                     id,
                     user_id,
                     type,
                     source,
                     credits,
                     payload,
                     created_at
                   ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                  [txId, userId, txType, txSource, transaction.credits, txPayload, now],
                  (insertErr) => {
                    if (insertErr) {
                      return db.run('ROLLBACK', () => reject(insertErr));
                    }

                    db.run('COMMIT', (commitErr) => {
                      if (commitErr) {
                        return reject(commitErr);
                      }

                      resolve({
                        userId,
                        creditsBalance: updatedBalance,
                        totalImagesGenerated: updatedImages,
                        totalCardsGenerated: updatedCards,
                        totalCollectionsSaved: updatedCollections,
                        totalPdfsExported: updatedPdfs,
                        totalCreditsSpent: updatedTotalSpent,
                      });
                    });
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};

const getUserCreditTransactions = async (userId, options = {}) => {
  const { limit = 50, offset = 0 } = options;

  if (!userId) {
    throw new Error('User ID is required to get credit transactions');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const safeLimit = Math.max(1, Math.min(Number(limit) || 50, 200));
  const safeOffset = Math.max(0, Number(offset) || 0);

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT
         id,
         user_id,
         type,
         source,
         credits,
         payload,
         created_at
       FROM credit_transactions
       WHERE user_id = ?
       ORDER BY datetime(created_at) DESC
       LIMIT ? OFFSET ?`,
      [userId, safeLimit, safeOffset],
      (err, rows) => {
        if (err) {
          return reject(err);
        }

        const transactions = (rows || []).map((row) => {
          let parsedPayload = null;

          if (row.payload) {
            try {
              parsedPayload = JSON.parse(row.payload);
            } catch (parseErr) {
              console.error('Failed to parse credit transaction payload:', parseErr);
            }
          }

          return {
            id: row.id,
            userId: row.user_id,
            type: row.type,
            source: row.source,
            credits: Number(row.credits || 0),
            payload: parsedPayload,
            createdAt: row.created_at,
          };
        });

        resolve(transactions);
      }
    );
  });
};

const applyAdminCreditAdjustment = async (userId, options = {}) => {
  const { delta, source, reason } = options;

  if (!userId) {
    throw new Error('User ID is required to apply admin credit adjustment');
  }

  const amount = Number(delta);

  if (!Number.isFinite(amount) || amount === 0) {
    throw new Error('A non-zero numeric delta is required for admin credit adjustment');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const now = new Date().toISOString();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION', (beginErr) => {
        if (beginErr) {
          return reject(beginErr);
        }

        db.get(
          `SELECT
             id,
             credits_balance,
             total_images_generated,
             total_cards_generated,
             total_collections_saved,
             total_pdfs_exported,
             total_credits_spent
           FROM users
           WHERE id = ?
           LIMIT 1`,
          [userId],
          (selectErr, row) => {
            if (selectErr) {
              return db.run('ROLLBACK', () => reject(selectErr));
            }

            if (!row) {
              const error = new Error('User not found');
              error.status = 404;
              return db.run('ROLLBACK', () => reject(error));
            }

            const currentBalance = Number(row.credits_balance || 0);

            if (amount < 0 && currentBalance + amount < 0) {
              const error = new Error('Adjustment would result in negative balance');
              error.status = 400;
              return db.run('ROLLBACK', () => reject(error));
            }

            const updatedBalance = currentBalance + amount;

            db.run(
              `UPDATE users
                 SET credits_balance = ?,
                     last_activity_at = ?,
                     updated_at = ?
               WHERE id = ?`,
              [
                updatedBalance,
                now,
                now,
                userId,
              ],
              (updateErr) => {
                if (updateErr) {
                  return db.run('ROLLBACK', () => reject(updateErr));
                }

                const txId = ensureRandomId();
                const txType = 'adjust';
                const txSource = source || 'admin_adjust';
                const txPayload = JSON.stringify({ reason: reason || null });

                db.run(
                  `INSERT INTO credit_transactions (
                     id,
                     user_id,
                     type,
                     source,
                     credits,
                     payload,
                     created_at
                   ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                  [txId, userId, txType, txSource, amount, txPayload, now],
                  (insertErr) => {
                    if (insertErr) {
                      return db.run('ROLLBACK', () => reject(insertErr));
                    }

                    db.run('COMMIT', (commitErr) => {
                      if (commitErr) {
                        return reject(commitErr);
                      }

                      resolve({
                        userId,
                        creditsBalance: updatedBalance,
                        totalImagesGenerated: Number(row.total_images_generated || 0),
                        totalCardsGenerated: Number(row.total_cards_generated || 0),
                        totalCollectionsSaved: Number(row.total_collections_saved || 0),
                        totalPdfsExported: Number(row.total_pdfs_exported || 0),
                        totalCreditsSpent: Number(row.total_credits_spent || 0),
                      });
                    });
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};

const createUser = async (userData) => {
  await initializeSchema();

  const { username, password } = userData;

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  return new Promise((resolve, reject) => {
    // Check if user exists
    db.get(
      'SELECT id FROM users WHERE username = ? LIMIT 1',
      [username],
      (err, existing) => {
        if (err) return reject(err);

        if (existing) {
          const error = new Error('Username already exists');
          error.status = 409;
          return reject(error);
        }

        const now = new Date().toISOString();
        const id = userData.id || ensureRandomId();

        db.run(
          `INSERT INTO users (
             id,
             username,
             password,
             created_at,
             updated_at,
             credits_balance,
             total_images_generated,
             total_cards_generated,
             total_collections_saved,
             total_pdfs_exported,
             total_credits_spent,
             last_activity_at
           ) VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0, 0, 0, NULL)`,
          [id, username, password, now, now, 50],
          function(err) {
            if (err) {
              reject(err);
            } else {
              resolve({
                id,
                username,
                createdAt: now,
                updatedAt: now,
              });
            }
          }
        );
      }
    );
  });
};

const getUserByUsername = async (username) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.get(
      'SELECT id, username, password, created_at as createdAt, updated_at as updatedAt FROM users WHERE username = ? LIMIT 1',
      [username],
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row || null);
        }
      }
    );
  });
};

// Gracefully close database connection on process exit
process.on('exit', () => {
  closeDatabase();
});

process.on('SIGINT', () => {
  closeDatabase();
  process.exit(0);
});

process.on('SIGTERM', () => {
  closeDatabase();
  process.exit(0);
});

// Credit System Methods

const getCreditPacks = async () => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT id, name, credit_amount, price_cents, is_active, sort_order, description, features
       FROM credit_packs
       WHERE is_active = 1
       ORDER BY sort_order ASC`,
      [],
      (err, rows) => {
        if (err) {
          return reject(err);
        }

        const packs = (rows || []).map((row) => {
          let parsedFeatures = null;

          if (row.features) {
            try {
              parsedFeatures = JSON.parse(row.features);
            } catch (parseErr) {
              console.error('Failed to parse credit pack features:', parseErr);
            }
          }

          return {
            id: row.id,
            name: row.name,
            creditAmount: Number(row.credit_amount || 0),
            priceCents: Number(row.price_cents || 0),
            priceEuros: (Number(row.price_cents || 0) / 100).toFixed(2),
            isActive: Boolean(row.is_active),
            sortOrder: Number(row.sort_order || 0),
            description: row.description || '',
            features: parsedFeatures,
          };
        });

        resolve(packs);
      }
    );
  });
};

const getCreditPackById = async (packId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, name, credit_amount, price_cents, is_active, sort_order, description, features
       FROM credit_packs
       WHERE id = ?
       LIMIT 1`,
      [packId],
      (err, row) => {
        if (err) {
          return reject(err);
        }

        if (!row) {
          const error = new Error('Credit pack not found');
          error.status = 404;
          return reject(error);
        }

        let parsedFeatures = null;

        if (row.features) {
          try {
            parsedFeatures = JSON.parse(row.features);
          } catch (parseErr) {
            console.error('Failed to parse credit pack features:', parseErr);
          }
        }

        resolve({
          id: row.id,
          name: row.name,
          creditAmount: Number(row.credit_amount || 0),
          priceCents: Number(row.price_cents || 0),
          priceEuros: (Number(row.price_cents || 0) / 100).toFixed(2),
          isActive: Boolean(row.is_active),
          sortOrder: Number(row.sort_order || 0),
          description: row.description || '',
          features: parsedFeatures,
        });
      }
    );
  });
};

const addCreditTransaction = async (userId, transactionData) => {
  const { type, source, credits, payload } = transactionData;

  if (!userId || !type || !source || typeof credits !== 'number') {
    throw new Error('User ID, type, source, and credits are required');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const txId = ensureRandomId();
  const now = new Date().toISOString();
  const txPayload = payload ? JSON.stringify(payload) : null;

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO credit_transactions (id, user_id, type, source, credits, payload, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [txId, userId, type, source, credits, txPayload, now],
      function(err) {
        if (err) {
          return reject(err);
        }

        resolve({
          id: txId,
          userId,
          type,
          source,
          credits: Number(credits),
          payload,
          createdAt: now,
        });
      }
    );
  });
};

const getUserCreditBalance = async (userId) => {
  if (!userId) {
    throw new Error('User ID is required to get credit balance');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  return new Promise((resolve, reject) => {
    db.get(
      'SELECT credits_balance FROM users WHERE id = ? LIMIT 1',
      [userId],
      (err, row) => {
        if (err) {
          return reject(err);
        }

        if (!row) {
          const error = new Error('User not found');
          error.status = 404;
          return reject(error);
        }

        resolve(Number(row.credits_balance || 0));
      }
    );
  });
};

const updateUserCreditBalance = async (userId, newBalance, transaction = null) => {
  if (!userId) {
    throw new Error('User ID is required to update credit balance');
  }

  if (typeof newBalance !== 'number' || newBalance < 0) {
    throw new Error('Valid non-negative balance is required');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const now = new Date().toISOString();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION', (beginErr) => {
        if (beginErr) {
          return reject(beginErr);
        }

        db.get(
          'SELECT credits_balance FROM users WHERE id = ? LIMIT 1',
          [userId],
          (selectErr, row) => {
            if (selectErr) {
              return db.run('ROLLBACK', () => reject(selectErr));
            }

            if (!row) {
              const error = new Error('User not found');
              error.status = 404;
              return db.run('ROLLBACK', () => reject(error));
            }

            const previousBalance = Number(row.credits_balance || 0);

            db.run(
              `UPDATE users
                 SET credits_balance = ?,
                     last_activity_at = ?,
                     updated_at = ?
               WHERE id = ?`,
              [newBalance, now, now, userId],
              (updateErr) => {
                if (updateErr) {
                  return db.run('ROLLBACK', () => reject(updateErr));
                }

                const shouldInsertTransaction =
                  transaction && typeof transaction.credits === 'number' && transaction.credits !== 0;

                if (!shouldInsertTransaction) {
                  return db.run('COMMIT', (commitErr) => {
                    if (commitErr) {
                      return reject(commitErr);
                    }

                    resolve({
                      userId,
                      previousBalance,
                      newBalance: Number(newBalance),
                      balanceChange: Number(newBalance) - previousBalance,
                    });
                  });
                }

                const txId = ensureRandomId();
                const txType = transaction.type || (transaction.credits > 0 ? 'earn' : 'spend');
                const txSource = transaction.source || 'unknown';
                const txPayload = transaction.payload ? JSON.stringify(transaction.payload) : null;

                db.run(
                  `INSERT INTO credit_transactions (id, user_id, type, source, credits, payload, created_at)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`,
                  [txId, userId, txType, txSource, transaction.credits, txPayload, now],
                  (insertErr) => {
                    if (insertErr) {
                      return db.run('ROLLBACK', () => reject(insertErr));
                    }

                    db.run('COMMIT', (commitErr) => {
                      if (commitErr) {
                        return reject(commitErr);
                      }

                      resolve({
                        userId,
                        previousBalance,
                        newBalance: Number(newBalance),
                        balanceChange: Number(newBalance) - previousBalance,
                        transactionId: txId,
                      });
                    });
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};

const consumeCredits = async (userId, creditsToConsume, transaction = null) => {
  if (!userId) {
    throw new Error('User ID is required to consume credits');
  }

  if (typeof creditsToConsume !== 'number' || creditsToConsume <= 0) {
    throw new Error('Valid positive credit amount is required to consume');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const now = new Date().toISOString();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION', (beginErr) => {
        if (beginErr) {
          return reject(beginErr);
        }

        db.get(
          `SELECT
             id,
             credits_balance,
             total_images_generated,
             total_cards_generated,
             total_collections_saved,
             total_pdfs_exported,
             total_credits_spent
           FROM users
           WHERE id = ?
           LIMIT 1`,
          [userId],
          (selectErr, row) => {
            if (selectErr) {
              return db.run('ROLLBACK', () => reject(selectErr));
            }

            if (!row) {
              const error = new Error('User not found');
              error.status = 404;
              return db.run('ROLLBACK', () => reject(error));
            }

            const currentBalance = Number(row.credits_balance || 0);

            if (currentBalance < creditsToConsume) {
              const error = new Error('Not enough credits');
              error.code = 'INSUFFICIENT_CREDITS';
              error.status = 402;
              error.details = {
                currentBalance,
                creditsToConsume,
                shortBy: creditsToConsume - currentBalance,
              };
              return db.run('ROLLBACK', () => reject(error));
            }

            const updatedBalance = currentBalance - creditsToConsume;
            const updatedTotalSpent = Number(row.total_credits_spent || 0) + creditsToConsume;

            db.run(
              `UPDATE users
                 SET credits_balance = ?,
                     total_credits_spent = ?,
                     last_activity_at = ?,
                     updated_at = ?
               WHERE id = ?`,
              [updatedBalance, updatedTotalSpent, now, now, userId],
              (updateErr) => {
                if (updateErr) {
                  return db.run('ROLLBACK', () => reject(updateErr));
                }

                const shouldInsertTransaction =
                  transaction && typeof transaction.credits === 'number' && transaction.credits !== 0;

                if (!shouldInsertTransaction) {
                  return db.run('COMMIT', (commitErr) => {
                    if (commitErr) {
                      return reject(commitErr);
                    }

                    resolve({
                      userId,
                      previousBalance: currentBalance,
                      newBalance: updatedBalance,
                      creditsConsumed: creditsToConsume,
                      totalCreditsSpent: updatedTotalSpent,
                    });
                  });
                }

                const txId = ensureRandomId();
                const txType = transaction.type || 'spend';
                const txSource = transaction.source || 'unknown';
                const txPayload = transaction.payload ? JSON.stringify(transaction.payload) : null;

                db.run(
                  `INSERT INTO credit_transactions (id, user_id, type, source, credits, payload, created_at)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`,
                  [txId, userId, txType, txSource, -creditsToConsume, txPayload, now],
                  (insertErr) => {
                    if (insertErr) {
                      return db.run('ROLLBACK', () => reject(insertErr));
                    }

                    db.run('COMMIT', (commitErr) => {
                      if (commitErr) {
                        return reject(commitErr);
                      }

                      resolve({
                        userId,
                        previousBalance: currentBalance,
                        newBalance: updatedBalance,
                        creditsConsumed: creditsToConsume,
                        totalCreditsSpent: updatedTotalSpent,
                        transactionId: txId,
                      });
                    });
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};

const addCredits = async (userId, creditsToAdd, transaction = null) => {
  if (!userId) {
    throw new Error('User ID is required to add credits');
  }

  if (typeof creditsToAdd !== 'number' || creditsToAdd <= 0) {
    throw new Error('Valid positive credit amount is required to add');
  }

  await initializeSchema();
  await ensureUserExists(userId);

  const now = new Date().toISOString();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION', (beginErr) => {
        if (beginErr) {
          return reject(beginErr);
        }

        db.get(
          'SELECT credits_balance FROM users WHERE id = ? LIMIT 1',
          [userId],
          (selectErr, row) => {
            if (selectErr) {
              return db.run('ROLLBACK', () => reject(selectErr));
            }

            if (!row) {
              const error = new Error('User not found');
              error.status = 404;
              return db.run('ROLLBACK', () => reject(error));
            }

            const currentBalance = Number(row.credits_balance || 0);
            const updatedBalance = currentBalance + creditsToAdd;

            db.run(
              `UPDATE users
                 SET credits_balance = ?,
                     last_activity_at = ?,
                     updated_at = ?
               WHERE id = ?`,
              [updatedBalance, now, now, userId],
              (updateErr) => {
                if (updateErr) {
                  return db.run('ROLLBACK', () => reject(updateErr));
                }

                const shouldInsertTransaction =
                  transaction && typeof transaction.credits === 'number' && transaction.credits !== 0;

                if (!shouldInsertTransaction) {
                  return db.run('COMMIT', (commitErr) => {
                    if (commitErr) {
                      return reject(commitErr);
                    }

                    resolve({
                      userId,
                      previousBalance: currentBalance,
                      newBalance: updatedBalance,
                      creditsAdded: creditsToAdd,
                    });
                  });
                }

                const txId = ensureRandomId();
                const txType = transaction.type || 'earn';
                const txSource = transaction.source || 'unknown';
                const txPayload = transaction.payload ? JSON.stringify(transaction.payload) : null;

                db.run(
                  `INSERT INTO credit_transactions (id, user_id, type, source, credits, payload, created_at)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`,
                  [txId, userId, txType, txSource, creditsToAdd, txPayload, now],
                  (insertErr) => {
                    if (insertErr) {
                      return db.run('ROLLBACK', () => reject(insertErr));
                    }

                    db.run('COMMIT', (commitErr) => {
                      if (commitErr) {
                        return reject(commitErr);
                      }

                      resolve({
                        userId,
                        previousBalance: currentBalance,
                        newBalance: updatedBalance,
                        creditsAdded: creditsToAdd,
                        transactionId: txId,
                      });
                    });
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};

const initializeCreditPacks = async () => {
  await initializeSchema();

  const defaultPacks = [
    {
      name: 'Découverte',
      credit_amount: 25,
      price_cents: 499,
      description: 'Perfect for trying out our card generation features',
      sort_order: 1,
      features: JSON.stringify([
        '25 credits included',
        'Basic support',
        '1 month validity'
      ]),
    },
    {
      name: 'Pro',
      credit_amount: 85,
      price_cents: 1499,
      description: 'Ideal for regular users and small projects',
      sort_order: 2,
      features: JSON.stringify([
        '85 credits included',
        'Priority support',
        '3 month validity'
      ]),
    },
    {
      name: 'Organisme',
      credit_amount: 250,
      price_cents: 3999,
      description: 'Best value for educational institutions and organizations',
      sort_order: 3,
      features: JSON.stringify([
        '250 credits included',
        'Premium support',
        '6 month validity',
        'Admin access'
      ]),
    },
  ];

  return new Promise((resolve, reject) => {
    let insertedCount = 0;
    let skippedCount = 0;

    db.serialize(() => {
      defaultPacks.forEach((pack, index) => {
        db.get(
          'SELECT id FROM credit_packs WHERE name = ? LIMIT 1',
          [pack.name],
          (err, existing) => {
            if (err) {
              return reject(err);
            }

            if (existing) {
              skippedCount++;
              if (insertedCount + skippedCount === defaultPacks.length) {
                resolve({
                  inserted: insertedCount,
                  skipped: skippedCount,
                  total: defaultPacks.length,
                });
              }
              return;
            }

            const now = new Date().toISOString();

            db.run(
              `INSERT INTO credit_packs (name, credit_amount, price_cents, description, sort_order, features, is_active, created_at, updated_at)
               VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?)`,
              [
                pack.name,
                pack.credit_amount,
                pack.price_cents,
                pack.description,
                pack.sort_order,
                pack.features,
                now,
                now,
              ],
              function(insertErr) {
                if (insertErr) {
                  return reject(insertErr);
                }

                insertedCount++;
                if (insertedCount + skippedCount === defaultPacks.length) {
                  resolve({
                    inserted: insertedCount,
                    skipped: skippedCount,
                    total: defaultPacks.length,
                  });
                }
              }
            );
          }
        );
      });
    });
  });
};

module.exports = {
  saveCollection,
  getCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
  getUserUsage,
  applyCreditChangeAndUsage,
  getUserCreditTransactions,
  applyAdminCreditAdjustment,
  createUser,
  getUserByUsername,
  getPublicCollections,
  getPublicCollectionById,
  // Credit system methods
  getCreditPacks,
  getCreditPackById,
  addCreditTransaction,
  getUserCreditBalance,
  updateUserCreditBalance,
  consumeCredits,
  addCredits,
  initializeCreditPacks,
  // Database instance for middleware
  db,
};
