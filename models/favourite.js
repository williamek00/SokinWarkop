'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favourite.belongsTo(models.User,{foreignKey:"UserId"})
      Favourite.belongsTo(models.Warkop,{foreignKey:"WarkopId"})
    }
  }
  Favourite.init({
    UserId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:"UserId must be filled",
        notEmpty:"UserId must be filled"
      },
    },
    WarkopId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:"WarkopId must be filled",
        notEmpty:"WarkopId must be filled"
      },
    }
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};