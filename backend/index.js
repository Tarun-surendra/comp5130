const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection function
require('dotenv').config();

const appointmentRoutes = require('./routes/appointmentRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/appointments', appointmentRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
