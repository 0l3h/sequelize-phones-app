'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate(models) {}
  };
  
  Phone.init({
    brand: {
      type: DataTypes.STRING,
      validate: {
        is: "([A-Z]|[a-z])"
      },
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        is: "([A-Z]|[a-z])"
      },
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacture_year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    RAM_size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    has_NFC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    CPU_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};