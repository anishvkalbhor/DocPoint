const doctorModel = require('../models/doctorModel');

const doctorsController = {
  async searchDoctors(req, res) {
    const { specialty } = req.query;
    const doctors = await doctorModel.getDoctorsBySpecialty(specialty);
    res.status(200).json(doctors.docs.map(doc => doc.data()));
  }
};

module.exports = doctorsController;
