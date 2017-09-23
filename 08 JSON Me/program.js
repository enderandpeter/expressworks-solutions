var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

var filepath = process.argv[3];

app.get('/books', function(req, res){
  fs.readFile(filepath, function(err, data){
    res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
