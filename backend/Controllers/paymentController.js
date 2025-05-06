const Payment = require('../models/payment'); // Import the Payment model

const processPayment = async (req, res) => {
  const { email, cardNumber, expiry, cvv, cardholderName } = req.body;

  try {
    // Validate required fields
    if (!email || !cardNumber || !expiry || !cvv || !cardholderName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save payment data to the database
    const newPayment = new Payment({
      email,
      cardNumber,
      expiry,
      cvv,
      cardholderName,
    });

    await newPayment.save();
    res.status(201).json({ message: 'Payment processed successfully', payment: newPayment });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ message: 'Failed to process payment' });
  }
};

module.exports = { processPayment };