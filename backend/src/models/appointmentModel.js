const { db } = require('../config/firebaseConfig');

const appointmentModel = {
  async bookAppointment(appointmentData) {
    return await db.collection('appointments').add(appointmentData);
  },
  async getAppointmentsByUserId(userId) {
    return await db.collection('appointments').where('userId', '==', userId).get();
  },
  async updateAppointment(appointmentId, updatedData) {
    return await db.collection('appointments').doc(appointmentId).update(updatedData);
  }
};

module.exports = appointmentModel;
