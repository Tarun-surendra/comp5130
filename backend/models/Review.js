// server/models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    reviewText: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
