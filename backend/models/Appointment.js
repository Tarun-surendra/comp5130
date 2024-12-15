const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    serviceType: { type: String, required: true },
    message: { type: String },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
