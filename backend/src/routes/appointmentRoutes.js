const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

router.post('/', appointmentsController.bookAppointment);
router.get('/:userId', appointmentsController.getAppointments);
router.put('/:id', appointmentsController.updateAppointment);

module.exports = router;
