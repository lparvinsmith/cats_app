
module.exports = function(sequelize, Datatypes){
  var Cat = sequelize.define('cat', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  return Cat;
};
