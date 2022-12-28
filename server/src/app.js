const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');
const morgan = require('morgan');

// Load config
dotenv.config({path: './config/config.env'});

// Connecting DB
connectDB();

// Create express app
const app = express();

// Allow cors
app.use(cors({ origin: process.env.CORS_ORIGIN_URL, credentials: true }));

// Logging
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded())

// Routes
app.use('/', require('./routes/index'));

// Running Server on PORT 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
