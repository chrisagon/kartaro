const admin = require('./firebaseAdmin');

const generateToken = async () => {
  throw new Error('Token generation is not supported on the backend. Use Firebase client SDK.');
};

const verifyToken = async (token) => {
  if (!token) {
    throw new Error('No authentication token provided');
  }

  const decodedToken = await admin.auth().verifyIdToken(token, true);
  return decodedToken;
};

module.exports = {
  generateToken,
  verifyToken,
};
