require('dotenv').config();

//require('./services/firebaseAdmin'); // Initialize Firebase Admin SDK
//const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cardsRouter = require('./api/cards');

const FRONTEND_PUBLIC_DIR = path.join(__dirname, '..', '..', 'frontend', 'public');

const app = express();
const port = process.env.PORT || 3001;
const requestLimit = process.env.REQUEST_LIMIT || '500mb';

const DEFAULT_ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'https://decklab.onrender.com',
];

const parseAllowedOrigins = () => {
  const rawOrigins = process.env.ALLOWED_ORIGINS;
  if (!rawOrigins) {
    return DEFAULT_ALLOWED_ORIGINS;
  }

  const origins = rawOrigins
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

  return origins.length > 0 ? origins : DEFAULT_ALLOWED_ORIGINS;
};

const allowedOrigins = parseAllowedOrigins();
const allowAllOrigins = allowedOrigins.includes('*');

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowAllOrigins) return callback(null, true);
    if (!allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: requestLimit }));
app.use(bodyParser.urlencoded({ limit: requestLimit, extended: true }));

// Serve cached images and frontend assets
app.use('/api/images', express.static(path.join(__dirname, 'cache', 'images')));
app.use('/images', express.static(path.join(FRONTEND_PUBLIC_DIR, 'images')));

const collectionsRouter = require('./api/collections');
const authRouter = require('./api/auth');

app.use('/api/cards', cardsRouter);
app.use('/api/collections', collectionsRouter);
app.use('/api/auth', authRouter);

app.get('/healthz', (req, res) => {
  res.json({ status: 'ok' });
});

// lignes à commenter si on utilise firebase functions
// et à décommenter pour l'utiliser en localhost.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//exports.api = functions.region('europe-west1').https.onRequest(app);
