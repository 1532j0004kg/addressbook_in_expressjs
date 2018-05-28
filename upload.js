var csv = require('fast-csv');
var mongoose = require('mongoose');
var entry = require('./models/entries.js');

exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	
	var entryFile = req.files.file;

	var entries = [];
		
	csv
	 .fromString(entryFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true,
     quoteColumns:true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 entries.push(data);
	 })
	 .on("end", function(){
		 entry.create(entries, function(err, documents) {
		 if (err) 
       res.send("Error...The username is not unique or there be error in uploading csv file. Learn more here on creating csv file https://www.computerhope.com/issues/ch001356.htm");
		 else
       res.redirect('/store');
		 });
	 });
};