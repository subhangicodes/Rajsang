const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
},
  cardNumber: { 
    type: String, 
    required: true 
},
  expiry: { 
    type: String, 
    required: true 
},
  cvv: { 
    type: String, 
    required: true 
},
  cardholderName: { 
    type: String, 
    required: true 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
},
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;