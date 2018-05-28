var express = require('express');
var entriesRoute = require('./routes/entriesroute.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var upload = require('./upload.js');
var fileUpload = require('express-fileupload');
var path = require('path');
var app = express();


mongoose.connect('mongodb://ram:ram@ds231740.mlab.com:31740/addressbook');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(entriesRoute);

app.get('/store',function(req,res){
  res.sendFile(path.join(__dirname,'./public' ,'/store.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public' ,'form.html'));
});

app.post('/upload', upload.post);

app.listen(8080,function(){
  console.log("server is running...");
});
