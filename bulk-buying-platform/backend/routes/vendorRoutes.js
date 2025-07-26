const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/vendorController');

router.post('/order', placeOrder);

module.exports = router;
