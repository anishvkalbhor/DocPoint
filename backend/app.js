// Import the Express.js module
const express = require('express');

// Initialize the Express.js app
const app = express();

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});