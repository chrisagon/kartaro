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
        'INSERT INTO users (id, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
        [userId, userId, '', now, now],
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
          updated_at TEXT NOT NULL
        )
      `, (err) => {
        if (err) return reject(err);
      });

      db.run(`
        CREATE TABLE IF NOT EXISTS collections (
          id TEXT PRIMARY KEY,
          user_id TEXT NOT NULL,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          data TEXT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id)
        )
      `, (err) => {
        if (err) return reject(err);
      });

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

  return {
    ...collectionData,
    id: collectionData.id || ensureRandomId(),
    userId,
    createdAt: collectionData.createdAt || now,
    updatedAt: collectionData.updatedAt || now,
  };
};

const saveCollection = async (userId, collectionData) => {
  await initializeSchema();
  await ensureUserExists(userId);
  const collection = normaliseCollectionPayload(userId, collectionData);

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT OR REPLACE INTO collections (id, user_id, name, created_at, updated_at, data)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        collection.id,
        collection.userId,
        collection.name,
        collection.createdAt,
        collection.updatedAt,
        JSON.stringify(collection)
      ],
      function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(collection);
        }
      }
    );
  });
};

const getCollections = async (userId) => {
  await initializeSchema();

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT data FROM collections
       WHERE user_id = ?
       ORDER BY datetime(created_at) DESC`,
      [userId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows.map(row => JSON.parse(row.data)));
        }
      }
    );
  });
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
          'INSERT INTO users (id, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
          [id, username, password, now, now],
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

module.exports = {
  saveCollection,
  getCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
  createUser,
  getUserByUsername,
};
