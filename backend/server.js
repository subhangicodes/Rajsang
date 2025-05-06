// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // For loading environment variables
const routes = require('../backend/routes/routes.js'); // Import the routes
const { errorHandler, logger } = require('../backend/middleware/middleware.js'); // Import middleware
const http = require('http'); // Import http module
const { Server } = require('socket.io'); // Import Socket.IO
const cors = require('cors'); // Import CORS middleware
const config= require('../backend/config/config.js');

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Allow requests from your frontend
        methods: ['GET', 'POST'], // Allow specific HTTP methods
        credentials: true // Allow credentials (cookies, authorization headers, etc.)
    }
}); // Create a Socket.IO server with CORS configuration

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json()); // Parse JSON bodies
app.use(logger); // Use the logger middleware for logging requests
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the routes
app.use(routes);

// Use the error handler middleware
app.use(errorHandler);

// Socket.IO setup
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for chat messages
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User  disconnected:', socket.id);
    });
});

// Start the server
const PORT = config.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});