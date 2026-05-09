// express web server
var express = require('express');
var app = express();

const port = 3000;

app.use('/', require('./routes'));


app.listen(process.env.port || 3000, () => {
  console.log('Server is running on port 3000');
});
