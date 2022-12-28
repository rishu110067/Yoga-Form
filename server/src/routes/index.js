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
      res.send(true);
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
// @route   GET /check
router.get('/check', async (req, res) => {
  try {
    console.log(req.query);
    const forms = await Form.findOne({email: req.query.email, month: req.query.month});
    console.log(forms);
    if(forms) {
      res.send(false);
    } else {
      res.send(true);
    }
  } catch (err) {
    console.error(err);
    res.send('error');
  }
})


// @desc    does the payment
// @route   GET /payment
router.get('/payment', async (req, res) => {
  try {
    console.log(req.query);
    if(payment.completePayment(req.query)) {
      res.send(true);
    } else {
      console.log('sending false....');
      res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send('error');
  }
})

module.exports = router;
