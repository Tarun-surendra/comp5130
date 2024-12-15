// server/controllers/quoteController.js
const Quote = require('../models/Quote');

exports.requestQuote = async (req, res) => {
    try {
        const quote = await Quote.create(req.body);
        res.status(201).json({ success: true, data: quote });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to request quote" });
    }
};
