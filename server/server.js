// A tiny express web server for the Expensify app

const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Use the /public directory to serve up web app assets
app.use(express.static(publicPath));

// request and response
// For routing, if the user does not go to index.html, serve index.html
// Then React Router will provide the correct page
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start production server on port 3000
app.listen(port, () => {
  console.log('Server is up.');
});
