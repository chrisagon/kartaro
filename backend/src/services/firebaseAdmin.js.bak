const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

// Securely initialize Firebase Admin SDK from environment variable
try {
  // The GOOGLE_APPLICATION_CREDENTIALS env var is the standard way to provide credentials.
  // It should contain the path to the service account file.
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable not set.');
  }
  if (!process.env.APP_STORAGE_BUCKET) {
    throw new Error('APP_STORAGE_BUCKET environment variable not set.');
  }

  const serviceAccountPath = path.resolve(__dirname, '..', '..', process.env.GOOGLE_APPLICATION_CREDENTIALS);

  if (!require('fs').existsSync(serviceAccountPath)) {
    throw new Error(`Service account file not found at: ${serviceAccountPath}`);
  }

  const serviceAccount = require(serviceAccountPath);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    storageBucket: process.env.APP_STORAGE_BUCKET
  });

  console.log('Firebase Admin SDK initialized successfully from service account file.');

} catch (error) {
  console.error('CRITICAL: Error initializing Firebase Admin SDK:', error.message);
  process.exit(1);
}

module.exports = admin;
