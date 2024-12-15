// server/models/Quote.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    serviceType: { type: String, required: true },
    details: { type: String },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Quote', quoteSchema);
