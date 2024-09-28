const userModel = require('../models/userModel');

const usersController = {
  async getUserProfile(req, res) {
    const userId = req.params.userId;
    const user = await userModel.getUserById(userId);
    res.status(200).json(user.data());
  }
};

module.exports = usersController;
