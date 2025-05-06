// middleware.js
const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.sendStatus(401); // Unauthorized if no token is provided
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user; // Attach user information to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

// Middleware to log requests
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Log the request method and URL
    next(); // Proceed to the next middleware or route handler
};

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Internal Server Error' }); // Send a generic error response
};

// Export the middleware functions
module.exports = {
    authenticateToken,
    logger,
    errorHandler,
};