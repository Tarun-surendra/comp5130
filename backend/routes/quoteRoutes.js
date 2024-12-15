// server/routes/quoteRoutes.js
const express = require('express');
const { requestQuote } = require('../controllers/quoteController');
const router = express.Router();

router.post('/request', requestQuote);

module.exports = router;
