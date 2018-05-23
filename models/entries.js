var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name : { type: String, index: { unique: true, dropDups: true }},
  email : String,
  address : String,
  phonenumber : Number,
  bloodgroup : String
});

var model = mongoose.model('entries',schema);

module.exports = model;
