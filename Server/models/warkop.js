'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warkop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Warkop.belongsToMany(models.User,{through:models.Favourite,foreignKey:"WarkopId"})

    }
  }
  Warkop.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"Name must be filled",
        notEmpty:"Name must be filled"
      },
    },
    address:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:"Address must be filled",
        notEmpty:"Address must be filled"
      },
    },
    imageUrl:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:"ImageUrl must be filled",
        notEmpty:"ImageUrl must be filled"
      },
    },
    rating: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:"Rating must be filled",
        notEmpty:"Rating must be filled"
      },
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:"Description must be filled",
        notEmpty:"Description must be filled"
      },
    },
    status:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"Status must be filled",
        notEmpty:"Status must be filled"
      },
    },
    city:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"City must be filled",
        notEmpty:"City must be filled"
      },
    },
    owner:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"Owner must be filled",
        notEmpty:"Owner must be filled"
      },
    }
  }, {
    sequelize,
    modelName: 'Warkop',
  });
  return Warkop;
};