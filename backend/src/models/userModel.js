const { db } = require('../config/firebaseConfig');

const userModel = {
  async getUserById(userId) {
    return await db.collection('users').doc(userId).get();
  },
  async createUser(userData) {
    return await db.collection('users').add(userData);
  }
};

module.exports = userModel;
