var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.route('/')
  .get(function(req,res){
    // res.send("cats#index");
    models.Cat.findAll({}).then(function(cats){
      res.json(cats);
    }, function(err){
      console.log(err);
    });
  })
  .post(function(req,res){
    // res.send("cats#create");
    models.Cat.create(req.body).then(function(cat){
        res.json(cat);
      }, function(err){
        console.log(err);
    });
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
