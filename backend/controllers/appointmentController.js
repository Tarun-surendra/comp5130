const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
    try {
        console.log(` -------------- ${JSON.stringify(req.body)}`);
        const appointment = await Appointment.create(req.body);
        res.status(201).json({ success: true, data: appointment });
    } catch (error) {
        console.log(`Server running on port ${error}`);
        res.status(500).json({ success: false, message: "Failed to book appointment" });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve appointments" });
    }
};
