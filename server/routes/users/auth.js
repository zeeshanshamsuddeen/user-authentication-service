const express = require('express');

const router = express.Router();

const { asyncRoute } = require('../../middlewares');
const { registerUser, userLogin, generateToken } = require('../../core/users/auth');

router.post('/login', asyncRoute(async (req, res) => {
  const { success, error, userId } = await userLogin(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  const token = generateToken(userId);
  return res.json({ success: true, userId, token });
}));

router.post('/signup', asyncRoute(async (req, res) => {
  const { success, error } = await registerUser(req.body);
  if (!success) {
    return res.status(401).json({ success: false, error });
  }
  return res.json({ success: true });
}));



module.exports = router;
