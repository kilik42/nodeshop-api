var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/nodeShopApi');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));










app.listen(3000, function(){
  console.log("swag shop api running on port 3000...");
})
