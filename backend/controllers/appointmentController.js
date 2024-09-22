const Appointment = require('../models/appointmentModel');

// Create a new appointment
const createAppointment = async (req, res) => {
    const { customer_name, phone_number, service, preferred_date, comments } = req.body;

    try {
        const newAppointment = new Appointment({
            customer_name,
            phone_number,
            service,
            preferred_date,
            comments
        });

        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create appointment', error });
    }
};

// Get all appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch appointments', error });
    }
};

module.exports = { createAppointment, getAppointments };
