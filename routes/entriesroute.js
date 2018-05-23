var express = require('express');
var router = express.Router();
var entries = require('../models/entries.js');

router.post('/post/entry',function(req,res){

  var newEntry = new entries();
    newEntry.name = req.body.name;
    newEntry.email = req.body.email;
    newEntry.address = req.body.address;
    newEntry.phonenumber = req.body.phonenumber;
    newEntry.bloodgroup = req.body.bloodgroup;
    newEntry.save(function(err, savedEntry){
      if(err)
        res.send("Name already exists");
      else
        res.redirect('/store');
    });
});

router.get('/get/entry',function(req,res){
      entries.find({},function(err, entry){
        if(err)
          res.send(err);
        else
          res.send(entry);
      });
});

router.post('/update/entry',function(req,res){
      entries.findOneAndUpdate({name: req.body.name},req.body, {new: true},
            function(err, updatedEntry){
             if(err)
              res.send(err);
            else
              res.redirect('/store');
       });
});

router.post('/delete/entry',function(req,res){
      entries.findOneAndDelete({name: req.body.deleteEntry},
          function(err, deletedEntry){
           if(err)
            res.send(err);
          else
            res.redirect('/store');
     });
});

module.exports = router;
