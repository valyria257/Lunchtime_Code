var express = require('express');
var app = express();

app.get('/', function(req, res){
  //render views/stockSelect.ejs template file
  res.render('pages/stockSelect', {title: 'STOCKSELECT PAGE'})
});

module.exports = app;

    





