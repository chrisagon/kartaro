const { verifyToken } = require('../services/AuthService');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.warn('No auth token provided, falling back to dev user.');
      req.user = { uid: process.env.DEFAULT_DEV_USER_ID || 'dev-user' };
      return next();
    }

    const idToken = authHeader.split('Bearer ')[1];

    if (!idToken) {
      console.warn('Malformed auth header, falling back to dev user.');
      req.user = { uid: process.env.DEFAULT_DEV_USER_ID || 'dev-user' };
      return next();
    }

    const decodedToken = await verifyToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error while verifying token:', error);
    req.user = { uid: process.env.DEFAULT_DEV_USER_ID || 'dev-user' };
    next();
  }
};

module.exports = authMiddleware;
