import { Router, error, json } from 'itty-router';
import cardsRouter from './api/cards';
import collectionsRouter from './api/collections';
import authRouter from './api/auth';

// Create a new router
const router = Router();

// Handle CORS preflight requests
router.all('*', (req, env, ctx) => {
  const origin = req.headers.get('Origin');
  if (origin && ['http://localhost:3000', 'https://decklab.pages.dev'].includes(origin)) {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  // For non-CORS requests, or requests from other origins, we don't add headers
  // and let the actual route handler process it.
});

// Wire up the existing routers
router.all('/api/cards/*', cardsRouter.handle);
router.all('/api/collections/*', collectionsRouter.handle);
router.all('/api/auth/*', authRouter.handle);

// Catch-all for 404s
router.all('*', () => error(404, 'Not Found'));

const handleRequest = (req, env, ctx) => {
  const origin = req.headers.get('Origin');
  return router.handle(req, env, ctx)
    .then(response => {
      // Add CORS headers to the final response
      if (origin && ['http://localhost:3000', 'https://decklab.pages.dev'].includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
      }
      return response;
    })
    .catch(err => {
      // Fallback for errors
      const response = error(err.status || 500, err.message);
      if (origin && ['http://localhost:3000', 'https://decklab.pages.dev'].includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
      }
      return response;
    });
};

export default {
  fetch: handleRequest
};
