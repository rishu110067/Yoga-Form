const express = require('express');
const router = express.Router();

const Form = require('../models/Form') 

// API endpoints
router.get('/', (req, res) => {
  res.send('Server is running...');
});

router.get('/api', (req, res) => {
  res.send('API Called...');
});

// @desc    save the form details in DB
// @route   POST /save
router.post('/save', async (req, res) => {
    try {
        console.log(req.body);
        await Form.create(req.body);
        res.send('saved');
    } catch (err) {
        console.error(err);
        res.send('error');
    }
})

module.exports = router;
