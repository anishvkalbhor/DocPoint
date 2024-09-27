const userModel = require('../models/userModel');
const admin = require('../config/firebaseConfig').admin;

const authController = {
  async register(req, res) {
    const { email, password, userData } = req.body;
    const userRecord = await admin.auth().createUser({ email, password });
    await userModel.createUser({ ...userData, uid: userRecord.uid });
    res.status(201).json(userRecord.uid);
  },
  async login(req, res) {
    const { email, password } = req.body;
    const userRecord = await admin.auth().getUserByEmail(email);
    res.status(200).json(userRecord.uid);
  }
};

module.exports = authController;
