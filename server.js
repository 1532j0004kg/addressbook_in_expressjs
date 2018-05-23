var express = require('express');
var entriesRoute = require('./routes/entriesroute.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

mongoose.connect('mongodb://ram:ram@ds231740.mlab.com:31740/addressbook');
//mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(entriesRoute);

app.get('/store',function(req,res){
  res.sendFile(path.join(__dirname,'./public' ,'/store.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public' ,'form.html'));
});
app.listen(8080,function(){
  console.log("server is running...");
});
