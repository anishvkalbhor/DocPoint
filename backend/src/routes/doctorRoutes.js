const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');

router.get('/search', doctorsController.searchDoctors);

module.exports = router;
