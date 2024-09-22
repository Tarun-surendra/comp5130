const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    preferred_date: {
        type: Date,
        required: true
    },
    comments: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
