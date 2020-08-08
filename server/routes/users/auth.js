const express = require('express');

const router = express.Router();

const { asyncRoute } = require('../../middlewares');
const users = require('../../core/users');

router.post('/login', asyncRoute(async (req, res) => {
  const { success, error, userId } = await users.auth.userLogin(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  const token = users.auth.generateToken(userId);
  return res.json({ success: true, userId, token });
}));

router.post('/signup', asyncRoute(async (req, res) => {
  const { success, error } = await users.auth.registerUser(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  return res.json({ success: true });
}));



module.exports = router;
