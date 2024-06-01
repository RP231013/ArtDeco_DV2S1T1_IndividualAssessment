const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/artworks', require('./routes/artworks'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
