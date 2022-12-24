const express = require('express');
const router = express.Router();
const Form = require('../models/Form') 
const payment = require('../lib/payment')

// API endpoints
router.get('/', (req, res) => {
  res.send('Server is running...');
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

// @desc    get all the form details from DB
// @route   GET /get
router.get('/get', async (req, res) => {
  try {
      const forms = await Form.find().lean();
      res.send(forms);
  } catch (err) {
      console.error(err);
      res.send('error');
  }
})

// @desc    does the payment
// @route   GET /payment
router.get('/payment', async (req, res) => {
  try {
    console.log(req.body);
    if(payment.completePayment(req.body)) {
      res.send('payment-done');
    } else {
      throw "payment-failed";
    }
  } catch (err) {
    console.error(err);
    res.send('error');
  }
})

module.exports = router;
