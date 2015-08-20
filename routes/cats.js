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
  .all(function(req,res,next){
    //add cat id as property of response: makes res.locals.cat available to each of following handlers
    models.Cat.findById(req.params.id).then(function(cat){
      res.locals.cat = cat;
      next();
    }, function(err){
      next(err); //goes to fail handler in app, unless we set fail handler below with all
    });
  })
  .get(function(req,res){
    res.send("cats#show");
  })
  .patch(function(req,res){
    // res.locals.cat stores cat, .update updates db using req.body
    res.locals.cat.update(req.body).then(function(cat){
      res.json(cat);
    }, function(err){
      res.sendStatus(500);
    });
  })
  .delete(function(req,res){
    res.send("cats#delete");
  })
  // fail handler -- next(err) leads here
  .all(function(err, req, res, next){
    if (err){
      res.sendStatus(404);
    }
  })


module.exports = router;
