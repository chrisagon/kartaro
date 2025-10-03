const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cardsRouter = require('./api/cards');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const collectionsRouter = require('./api/collections');

app.use('/api/cards', cardsRouter);
app.use('/api/collections', collectionsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
