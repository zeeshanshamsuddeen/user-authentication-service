const express = require('express');

const config = require('../../config');
const router = express.Router();
const utils = require('../../shared/utils');
const db = require('../../dbHandlers/dbModule');
const users = require('../../core/users');

router.get('/:id', async (req, res) => {
  const { id: userId } = req.params;
  const userFromDb = await db.users.findOneWithLean({ userId });
  return res.json({ success: true, user: userFromDb });
});

router.put('/update/:id', async (req, res) => {
  const { id: userId } = req.params;
  const updateResponse = await users.profile.updateUser(userId, req.body);
  if (!updateResponse.success) {
    return res.json({ success: false, error: updateResponse.error });
  }
  return res.json({ success: true });
});



module.exports = router;
