const express = require('express');
const { generateToken } = require('../services/AuthService');
const { createUser, getUserByUsername } = require('../services/LocalDatabaseService');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // TODO: Hash password before storing
    const newUser = await createUser({ username, password });
    const token = await generateToken(newUser);
    res.json({ token });
  } catch (e) {
    console.error('Error creating user:', e);
    res.status(500).json({ error: 'Could not create user' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // TODO: Compare hashed password
    if (user.password !== password) {
      return res.status(403).json({ error: 'Invalid password' });
    }

    const token = await generateToken(user);
    res.json({ token });
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
