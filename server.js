// express web server
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.port || 3000, () => {
  console.log('Server is running on port 3000');
});
