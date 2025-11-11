const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const resolveServiceAccount = () => {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    return {
      project_id: projectId,
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    };
  }

  if (process.env.FIREBASE_CREDENTIALS_BASE64) {
    try {
      const decoded = Buffer.from(process.env.FIREBASE_CREDENTIALS_BASE64, 'base64').toString('utf8');
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Failed to parse FIREBASE_CREDENTIALS_BASE64:', error);
      throw error;
    }
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    try {
      return JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    } catch (error) {
      console.error('Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON:', error);
      throw error;
    }
  }

  const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (serviceAccountPath) {
    const absolutePath = path.isAbsolute(serviceAccountPath)
      ? serviceAccountPath
      : path.resolve(__dirname, '..', '..', serviceAccountPath);

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`Service account file not found at: ${absolutePath}`);
    }

    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  }

  return null;
};

if (!admin.apps.length) {
  const serviceAccount = resolveServiceAccount();

  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.APP_STORAGE_BUCKET,
    });
    console.log('[Auth] Firebase Admin initialised using explicit service account credentials.');
  } else {
    admin.initializeApp();
    console.log('[Auth] Firebase Admin initialised using application default credentials.');
  }
}

module.exports = admin;
