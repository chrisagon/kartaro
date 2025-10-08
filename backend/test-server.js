const express = require('express');
const { generateCards } = require('./src/services/GeminiService');

const app = express();
app.use(express.json());

app.post('/test-generate', async (req, res) => {
  try {
    const cards = await generateCards(req.body.theme, req.body.context);
    res.json(cards);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
