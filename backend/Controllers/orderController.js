const Order = require('../models/order.js'); // Import the Order model

const placeOrder = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debugging: Log the request body

    // Validate required fields
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      pinCode,
      country,
      phone,
      paymentMethod,
      totalAmount,
      items,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !state ||
      !pinCode ||
      !country ||
      !phone ||
      !paymentMethod ||
      !totalAmount ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return res.status(400).json({ message: 'All fields and items are required' });
    }

    // Save the order to the `Order` model
    const newOrder = new Order({
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      pinCode,
      country,
      phone,
      paymentMethod,
      totalAmount,
      items,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
};

const getOrders = async (req, res) => {
  try {
    // Fetch all orders from the Order model
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

module.exports = { placeOrder, getOrders };
