let randomUUID;
try {
  ({ randomUUID } = require('crypto'));
} catch (error) {
  randomUUID = undefined;
}

const ensureRandomId = () => {
  if (typeof randomUUID === 'function') {
    return randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

let schemaPromise = null;

const getDatabase = (env) => {
  const db = env?.DB || env?.D1;

  if (!db) {
    throw new Error('D1 database binding is not configured. Add a [[d1_databases]] binding in wrangler.toml.');
  }

  return db;
};

const ensureSchema = async (env) => {
  if (schemaPromise) {
    return schemaPromise;
  }

  const db = getDatabase(env);

  schemaPromise = db
    .exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS collections (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        data TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE INDEX IF NOT EXISTS idx_collections_user ON collections (user_id);
    `)
    .catch((error) => {
      schemaPromise = null;
      throw error;
    });

  return schemaPromise;
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

const saveCollectionToD1 = async (env, userId, collectionData) => {
  await ensureSchema(env);
  const db = getDatabase(env);
  const collection = normaliseCollectionPayload(userId, collectionData);

  await db
    .prepare(
      `INSERT INTO collections (id, user_id, name, created_at, updated_at, data)
       VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         user_id = excluded.user_id,
         name = excluded.name,
         updated_at = excluded.updated_at,
         data = excluded.data`
    )
    .bind(
      collection.id,
      collection.userId,
      collection.name,
      collection.createdAt,
      collection.updatedAt,
      JSON.stringify(collection)
    )
    .run();

  return collection;
};

const getCollectionsFromD1 = async (env, userId) => {
  await ensureSchema(env);
  const db = getDatabase(env);

  const { results } = await db
    .prepare(
      `SELECT data FROM collections
       WHERE user_id = ?
       ORDER BY datetime(created_at) DESC`
    )
    .bind(userId)
    .all();

  return (results || []).map((row) => JSON.parse(row.data));
};

const getCollectionByIdFromD1 = async (env, userId, collectionId) => {
  await ensureSchema(env);
  const db = getDatabase(env);

  const row = await db
    .prepare(
      `SELECT data FROM collections
       WHERE id = ? AND user_id = ?
       LIMIT 1`
    )
    .bind(collectionId, userId)
    .first();

  if (!row) {
    const error = new Error('Collection not found');
    error.status = 404;
    throw error;
  }

  return JSON.parse(row.data);
};

const updateCollectionInD1 = async (env, userId, collectionData) => {
  return saveCollectionToD1(env, userId, collectionData);
};

const deleteCollectionFromD1 = async (env, userId, collectionId) => {
  await ensureSchema(env);
  const db = getDatabase(env);

  const result = await db
    .prepare('DELETE FROM collections WHERE id = ? AND user_id = ?')
    .bind(collectionId, userId)
    .run();

  if (!result || result.meta.changes === 0) {
    const error = new Error('Collection not found');
    error.status = 404;
    throw error;
  }
};

const createUser = async (env, userData) => {
  await ensureSchema(env);
  const db = getDatabase(env);

  const { username, password } = userData;

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  const existing = await db
    .prepare('SELECT id FROM users WHERE username = ? LIMIT 1')
    .bind(username)
    .first();

  if (existing) {
    const error = new Error('Username already exists');
    error.status = 409;
    throw error;
  }

  const now = new Date().toISOString();
  const id = userData.id || ensureRandomId();

  await db
    .prepare('INSERT INTO users (id, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)')
    .bind(id, username, password, now, now)
    .run();

  return {
    id,
    username,
    createdAt: now,
    updatedAt: now,
  };
};

const getUserByUsername = async (env, username) => {
  await ensureSchema(env);
  const db = getDatabase(env);

  const row = await db
    .prepare('SELECT id, username, password, created_at as createdAt, updated_at as updatedAt FROM users WHERE username = ? LIMIT 1')
    .bind(username)
    .first();

  return row || null;
};

module.exports = {
  saveCollectionToD1,
  getCollectionsFromD1,
  getCollectionByIdFromD1,
  updateCollectionInD1,
  deleteCollectionFromD1,
  createUser,
  getUserByUsername,
};
