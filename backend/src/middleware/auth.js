const { verifyToken } = require('../services/AuthService');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ error: 'Unauthorized: No token provided' });
    }

    const idToken = authHeader.split('Bearer ')[1];

    if (!idToken) {
      return res.status(403).json({ error: 'Unauthorized: No token provided' });
    }

    const decodedToken = await verifyToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error while verifying token:', error);
    return res.status(403).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
