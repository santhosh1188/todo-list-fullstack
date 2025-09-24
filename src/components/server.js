server.js
// Import required modules
const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! This is your Node.js server.');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});