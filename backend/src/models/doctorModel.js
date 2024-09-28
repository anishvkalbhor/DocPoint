const { db } = require('../config/firebaseConfig');

const doctorModel = {
  async getDoctorsBySpecialty(specialty) {
    return await db.collection('doctors').where('specialty', '==', specialty).get();
  },
  async getDoctorById(doctorId) {
    return await db.collection('doctors').doc(doctorId).get();
  }
};

module.exports = doctorModel;
