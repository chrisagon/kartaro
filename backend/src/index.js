require('./services/firebaseAdmin'); // Initialize Firebase Admin SDK
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cardsRouter = require('./api/cards');

const FRONTEND_PUBLIC_DIR = path.join(__dirname, '..', '..', 'frontend', 'public');

const app = express();
const port = process.env.PORT || 3001;
const requestLimit = process.env.REQUEST_LIMIT || '500mb';

app.use(cors());
app.use(bodyParser.json({ limit: requestLimit }));
app.use(bodyParser.urlencoded({ limit: requestLimit, extended: true }));

// Serve cached images and frontend assets
app.use('/api/images', express.static(path.join(__dirname, 'cache', 'images')));
app.use('/images', express.static(path.join(FRONTEND_PUBLIC_DIR, 'images')));

const collectionsRouter = require('./api/collections');

app.use('/api/cards', cardsRouter);
app.use('/api/collections', collectionsRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

exports.api = functions.region('europe-west1').https.onRequest(app);
