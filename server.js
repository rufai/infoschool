var express = require('express'),
  app = express(),
  port = process.env.PORT || 6000;

app.listen(port);

console.log('Info School Server ' + port);
