var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req,res){
    res.send("cats#index");
  })
  .post(function(req,res){
    res.send("cats#create");
  });

router.route('/:id')
  .get(function(req,res){
    res.send("cats#show");
  })
  .patch(function(req,res){
    res.send("cats#update");
  })
  .delete(function(req,res){
    res.send("cats#delete");
  })

module.exports = router;
