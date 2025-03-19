const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// A simple route to test
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// A more custom route
app.get('/greet', (req, res) => {
  res.json({ message: 'Greetings from the Node.js Web Service!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
