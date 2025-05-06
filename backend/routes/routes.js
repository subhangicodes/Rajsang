// routes.js
const express = require('express');
const { registerUser, loginUser } = require('../Controllers/controllers.js'); // Import controller functions
const { placeOrder, getOrders } = require('../Controllers/orderController.js');
const { processPayment } = require('../Controllers/paymentController.js');


const router = express.Router();

// User Registration Route
router.post('/api/register', registerUser);

// User Login Route
router.post('/api/login', loginUser);

// Place Order Route
router.post('/api/place-order', placeOrder);

// Payment Route
router.post('/api/payment', processPayment);

// GET: Fetch all orders
router.get('/api/myorder', getOrders);

// Export the router
module.exports = router;