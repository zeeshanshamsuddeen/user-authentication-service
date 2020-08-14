const express = require('express');

const router = express.Router();

const { asyncRoute } = require('../middlewares');
const { users } = require('../controllers');

router.get('/:id', asyncRoute(users.getUser));
router.put('/:id', asyncRoute(users.updateUser));

module.exports = router;
