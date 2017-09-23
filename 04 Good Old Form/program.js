var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

app.post('/form', function(req, res){
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
