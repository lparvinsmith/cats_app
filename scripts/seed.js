var async = require('async');
var models = require('../models/index');

// .series arguments: array of steps, final callback
async.series([
  function(cb){        //clear database
    models.Cat.destroy({where:{}}).then(function(){
      console.log("just cleared the database.");
      //triggers next callback
      cb();
    });
  },
  function(cb){        //seed database
    async.parallel([   //use parallel to create all at same time
      function(done){
        models.Cat.create({ name: "Licky"}).then(done)
      },
      function(){
        models.Cat.create({ name: "Hobbes"}).then(done)
      },
      function(){
        models.Cat.create({ name: "Sprinkles"}).then(done)
      }
    ], function(err, results){
        if (err){console.log(err);}
        console.log("cats created!");
        cb();
      });
  }
  ], function(err,results){

    console.log("DB of cats is ready!")
});
