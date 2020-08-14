const { users } = require('../services');

const getUser = async (req, res) => {
  const { id: userId } = req.params;
  const { user } = await users.getUser(userId);
  return res.json({ success: true, user });
};

const updateUser = async (req, res) => {
  const { id: userId } = req.params;
  const updateResponse = await users.updateUser(userId, req.body);
  if (!updateResponse.success) {
    return res.json({ success: false, error: updateResponse.error });
  }
  return res.json({ success: true });
};

module.exports = {
  getUser,
  updateUser,
};
