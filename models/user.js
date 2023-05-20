'use strict';
const { hashedPassword } = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Warkop,{through:models.Favourite,foreignKey:"UserId"})
    }
  }
  User.init({
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"Email must be filled",
        notEmpty:"Email must be filled"
      },
      unique:true,
      isEmail:true
      
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:"Password must be filled",
        notEmpty:"Password must be filled"
      },
    },
    isSubscribe:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate:(user) => {
        user.password = hashedPassword(user.password)
      }
    }
  });
  return User;
};