/**
 * Admin Middleware
 * 
 * Verifies that the authenticated user has admin privileges.
 * Uses Firebase custom claims and environment variable fallback.
 */

const admin = require('firebase-admin');

/**
 * Middleware to check if user has admin privileges
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const requireAdmin = async (req, res, next) => {
  try {
    // Get user from auth middleware (should be attached to req.user)
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        code: 'UNAUTHORIZED',
        message: 'Please provide valid authentication credentials'
      });
    }

    const userId = req.user.uid;
    
    // Check Firebase custom claims first
    let isAdmin = false;
    
    try {
      const userRecord = await admin.auth().getUser(userId);
      isAdmin = userRecord.customClaims?.admin === true;
    } catch (firebaseError) {
      console.warn('Failed to check Firebase custom claims:', firebaseError.message);
    }

    // Fallback to environment variable list
    if (!isAdmin) {
      const adminUserIds = process.env.ADMIN_USER_IDS?.split(',')?.map(id => id.trim()) || [];
      isAdmin = adminUserIds.includes(userId);
    }

    if (!isAdmin) {
      return res.status(403).json({
        error: 'Admin access required',
        code: 'FORBIDDEN',
        message: 'This endpoint requires administrator privileges'
      });
    }

    // Attach admin flag to request for downstream use
    req.isAdmin = true;
    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
      message: 'Failed to verify admin privileges'
    });
  }
};

module.exports = {
  requireAdmin
};