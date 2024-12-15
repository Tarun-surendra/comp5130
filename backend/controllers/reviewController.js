// server/controllers/reviewController.js
const Review = require('../models/Review');

// Create a new review
exports.addReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json({ success: true, data: review });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add review' });
    }
};

// Get all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ date: -1 }); // Sort by latest reviews
        res.status(200).json({ success: true, data: reviews });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve reviews' });
    }
};
