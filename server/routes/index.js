const express = require('express');
const router = express.Router();

// API endpoints
router.get('/', (req, res) => {
  res.send('Server is running...');
});

router.get('/api', (req, res) => {
  res.send('API Called...');
});

module.exports = router;
