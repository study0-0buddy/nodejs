const express = require('express');
const app = express();
const PORT = 8080;

// handle '/' requests
app.get('/', function(req, res) {
  res.send('Hello World!')
});

// prints a log once the server starts listening
app.listen(PORT, function() {
  console.log(`express app on port: ${PORT}!`)
});