const express = require('express');

const router = express.Router();

const users = require('../../core/users');

router.post('/login', async (req, res) => {
  const { success, error, userId } = await users.auth.userLogin(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  const token = users.auth.generateToken(userId);
  return res.json({ success: true, token });
});

router.post('/signup', async (req, res) => {
  const { success, error, userId } = await users.auth.registerUser(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  const token = users.auth.generateToken(userId);
  return res.json({ success: true, token });
});



module.exports = router;
