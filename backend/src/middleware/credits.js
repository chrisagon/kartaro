/**
 * Credit Enforcement Middleware - SAFE VERSION
 * 
 * Middleware to enforce credit requirements for various operations.
 * This version uses lazy loading to prevent startup crashes.
 */

let CreditService = null;

/**
 * Lazy load CreditService to prevent startup crashes
 */
function getCreditService() {
  if (!CreditService) {
    try {
      CreditService = require('../services/CreditService');
    } catch (error) {
      console.error('Failed to load CreditService:', error);
      return null;
    }
  }
  return CreditService;
}

/**
 * Calculate required credits for an operation
 * @param {string} operation - Operation type
 * @param {Object} params - Operation parameters
 * @param {Object} creditService - CreditService instance
 * @returns {number} Required credits
 */
function calculateRequiredCredits(operation, params, creditService) {
  try {
    if (!creditService) return 0;
    return creditService.calculateRequiredCredits(operation, params);
  } catch (error) {
    console.error('Error calculating required credits:', error);
    return 0;
  }
}

/**
 * Resolve dynamic parameters (functions that evaluate at runtime)
 * @param {Object} params - Parameters object
 * @param {Object} req - Express request object
 * @returns {Object} Resolved parameters
 */
function resolveParams(params, req) {
  const resolved = {};
  
  for (const [key, value] of Object.entries(params || {})) {
    if (typeof value === 'function') {
      try {
        resolved[key] = value(req);
      } catch (error) {
        console.error(`Error resolving parameter ${key}:`, error);
        resolved[key] = 0;
      }
    } else {
      resolved[key] = value;
    }
  }
  
  return resolved;
}

/**
 * Middleware to require sufficient credits before operation
 * @param {string} operation - Operation type
 * @param {Object} options - Options for credit calculation
 * @returns {Function} Express middleware
 */
const requireCredits = (operation, options = {}) => {
  return async (req, res, next) => {
    try {
      // Skip credit check if database is not available
      if (!req.db) {
        console.warn('Database not available in request, skipping credit check');
        return next();
      }

      // Get CreditService lazily
      const CreditServiceClass = getCreditService();
      if (!CreditServiceClass) {
        console.warn('CreditService not available, skipping credit check');
        return next();
      }

      // Initialize credit service
      const creditService = new CreditServiceClass(req.db);

      // Resolve dynamic parameters
      const params = resolveParams(options, req);

      // Calculate required credits
      const requiredCredits = calculateRequiredCredits(operation, params, creditService);

      // Allow zero credit operations
      if (requiredCredits === 0 || options.allowZero) {
        return next();
      }

      // Get user credits
      const userCredits = await creditService.getUserCredits(req.user.uid);

      // Check if user has sufficient credits
      if (userCredits < requiredCredits) {
        return res.status(402).json({
          error: 'Not enough credits',
          code: 'INSUFFICIENT_CREDITS',
          required: requiredCredits,
          available: userCredits
        });
      }

      // Store credit info for potential consumption later
      req.creditInfo = {
        operation,
        requiredCredits,
        userCredits,
        params
      };

      next();
    } catch (error) {
      console.error('Error in requireCredits middleware:', error);
      
      // Don't block the operation if credit checking fails
      console.warn('Allowing operation due to credit system error');
      return next();
    }
  };
};

/**
 * Middleware to consume credits after successful operation
 * @param {string} operation - Operation type
 * @param {Object} options - Options for credit consumption
 * @returns {Function} Express middleware
 */
const consumeCredits = (operation, options = {}) => {
  return async (req, res, next) => {
    // Store original res.json to intercept successful responses
    const originalJson = res.json;
    const originalEnd = res.end;

    let operationSuccessful = false;
    let responseData = null;

    // Intercept res.json calls
    res.json = function(data) {
      responseData = data;
      operationSuccessful = true;
      return originalJson.call(this, data);
    };

    // Intercept res.end calls
    res.end = function(data) {
      if (res.statusCode < 400) {
        operationSuccessful = true;
      }
      return originalEnd.call(this, data);
    };

    // Continue to next middleware
    next();

    // Consume credits after response is sent (if operation was successful)
    setImmediate(async () => {
      try {
        // Skip credit consumption if database is not available
        if (!req.db || !operationSuccessful) {
          return;
        }

        // Get CreditService lazily
        const CreditServiceClass = getCreditService();
        if (!CreditServiceClass) {
          return;
        }

        const creditService = new CreditServiceClass(req.db);
        
        // Use stored credit info or calculate new
        let creditsToConsume = 0;
        
        if (req.creditInfo) {
          creditsToConsume = req.creditInfo.requiredCredits;
        } else {
          // Fallback: calculate credits
          const params = resolveParams(options, req);
          creditsToConsume = calculateRequiredCredits(operation, params, creditService);
        }

        // Skip if no credits to consume
        if (creditsToConsume === 0) {
          return;
        }

        // Consume credits
        await creditService.consumeCredits(
          req.user.uid,
          creditsToConsume,
          options.source || operation,
          {
            ...options.payload,
            operation,
            timestamp: new Date().toISOString(),
            requestId: req.id || 'unknown'
          }
        );

        console.log(`Consumed ${creditsToConsume} credits from user ${req.user.uid} for operation ${operation}`);
      } catch (error) {
        console.error('Error consuming credits:', error);
        // Don't fail the response, just log the error
      }
    });
  };
};

/**
 * Middleware to ensure user exists in credit system
 * @param {Object} options - Options
 * @returns {Function} Express middleware
 */
const ensureUserCredits = (options = {}) => {
  return async (req, res, next) => {
    try {
      // Skip if database is not available
      if (!req.db) {
        console.warn('Database not available in request, skipping user credit initialization');
        return next();
      }

      // Get CreditService lazily
      const CreditServiceClass = getCreditService();
      if (!CreditServiceClass) {
        console.warn('CreditService not available, skipping user credit initialization');
        return next();
      }

      const creditService = new CreditServiceClass(req.db);
      
      try {
        // Try to get user credits
        await creditService.getUserCredits(req.user.uid);
      } catch (error) {
        if (error.message.includes('User not found')) {
          // Initialize user with default credits
          await creditService.initializeUserCredits(
            req.user.uid,
            req.user.email,
            req.user.displayName || req.user.name || 'User'
          );
          console.log(`Initialized credits for new user: ${req.user.uid}`);
        } else {
          throw error;
        }
      }

      next();
    } catch (error) {
      console.error('Error in ensureUserCredits middleware:', error);
      // Don't block authentication due to credit system errors
      next();
    }
  };
};

/**
 * Middleware to add credit info to response
 * @param {Object} options - Options
 * @returns {Function} Express middleware
 */
const addCreditInfo = (options = {}) => {
  return async (req, res, next) => {
    try {
      // Skip if database is not available
      if (!req.db) {
        return next();
      }

      // Get CreditService lazily
      const CreditServiceClass = getCreditService();
      if (!CreditServiceClass) {
        return next();
      }

      const creditService = new CreditServiceClass(req.db);
      
      try {
        const usage = await creditService.getUserUsageStats(req.user.uid);
        
        // Add credit info to response
        res.locals.creditInfo = usage;
        
        // If includeUsage is true, add to response data
        if (options.includeUsage && responseData) {
          responseData.credits = usage;
        }
      } catch (error) {
        console.error('Error getting credit info:', error);
        // Don't fail the operation
      }

      next();
    } catch (error) {
      console.error('Error in addCreditInfo middleware:', error);
      next();
    }
  };
};

module.exports = {
  requireCredits,
  consumeCredits,
  ensureUserCredits,
  addCreditInfo
};