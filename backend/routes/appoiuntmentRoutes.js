const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');

// POST request to create an appointment
router.post('/', createAppointment);

// GET request to retrieve appointments
router.get('/', getAppointments);

module.exports = router;
