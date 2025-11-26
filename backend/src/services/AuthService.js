const admin = require('./firebaseAdmin');
// TODO: Re-enable credit service once it's properly implemented
// const CreditService = require('./CreditService');

const generateToken = async () => {
  throw new Error('Token generation is not supported on the backend. Use Firebase client SDK.');
};

const verifyToken = async (token, db) => {
  if (!token) {
    throw new Error('No authentication token provided');
  }

  const decodedToken = await admin.auth().verifyIdToken(token, true);
  
  // Temporarily disable credit initialization to isolate crash issue
  // Initialize user credits if this is their first time (SAFE VERSION)
  // if (db && decodedToken.uid) {
  //   await initializeUserCreditsIfNeeded(decodedToken, db);
  // }
  
  return decodedToken;
};

/**
 * Initialize user with 50 free credits if they don't exist yet
 * @param {Object} decodedToken - Firebase decoded token
 * @param {Object} db - Database instance
 */
const initializeUserCreditsIfNeeded = async (decodedToken, db) => {
  try {
    // Lazy load CreditService to prevent startup crashes
    const CreditService = require('./CreditService');
    const creditService = new CreditService(db);

    // Try to get user credits - this will fail if user doesn't exist
    await creditService.getUserCredits(decodedToken.uid);
  } catch (error) {
    if (error.message.includes('User not found')) {
      // User doesn't exist, initialize with free credits
      try {
        const CreditService = require('./CreditService');
        const creditService = new CreditService(db);
        
        await creditService.initializeUserCredits(
          decodedToken.uid,
          decodedToken.email,
          decodedToken.displayName || decodedToken.name || 'User'
        );

        console.log(`Initialized 50 free credits for new user: ${decodedToken.uid}`);
      } catch (initError) {
        console.error('Failed to initialize user credits:', initError);
        // Don't throw error here - user authentication should still work
        // even if credit initialization fails
      }
    } else {
      // Some other error occurred, log it but don't fail authentication
      console.error('Error checking user credits:', error);
    }
  }
};

/**
 * Get or create user with credits
 * @param {Object} userData - User data from Firebase
 * @param {Object} db - Database instance
 * @returns {Promise<Object>} User info with credits
 */
const getOrCreateUserWithCredits = async (userData, db) => {
  try {
    // Lazy load CreditService to prevent startup crashes
    const CreditService = require('./CreditService');
    const creditService = new CreditService(db);
    
    // Try to get existing user credits
    const credits = await creditService.getUserCredits(userData.uid);
    
    return {
      uid: userData.uid,
      email: userData.email,
      displayName: userData.displayName || userData.name,
      creditsBalance: credits,
      isNewUser: false
    };
  } catch (error) {
    if (error.message.includes('User not found')) {
      // Create new user with free credits
      try {
        const CreditService = require('./CreditService');
        const creditService = new CreditService(db);
        
        const result = await creditService.initializeUserCredits(
          userData.uid,
          userData.email,
          userData.displayName || userData.name || 'User'
        );
        
        return {
          uid: userData.uid,
          email: userData.email,
          displayName: userData.displayName || userData.name,
          creditsBalance: result.creditsBalance,
          isNewUser: true,
          transactionId: result.transactionId
        };
      } catch (initError) {
        console.error('Failed to initialize user credits:', initError);
        // Return basic user info if credit initialization fails
        return {
          uid: userData.uid,
          email: userData.email,
          displayName: userData.displayName || userData.name,
          creditsBalance: 0,
          isNewUser: false
        };
      }
    } else {
      throw error;
    }
  }
};

module.exports = {
  generateToken,
  verifyToken,
  initializeUserCreditsIfNeeded,
  getOrCreateUserWithCredits,
};
