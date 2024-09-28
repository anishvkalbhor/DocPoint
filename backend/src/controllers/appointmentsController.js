const appointmentModel = require('../models/appointmentModel');

const appointmentsController = {
  async bookAppointment(req, res) {
    const { userId, doctorId, timeSlot } = req.body;
    const result = await appointmentModel.bookAppointment({ userId, doctorId, timeSlot });
    res.status(201).json(result.id);
  },
  async getAppointments(req, res) {
    const userId = req.params.userId;
    const appointments = await appointmentModel.getAppointmentsByUserId(userId);
    res.status(200).json(appointments.docs.map(doc => doc.data()));
  },
  async updateAppointment(req, res) {
    const appointmentId = req.params.id;
    const updatedData = req.body;
    await appointmentModel.updateAppointment(appointmentId, updatedData);
    res.status(200).send("Appointment updated");
  }
};

module.exports = appointmentsController;
