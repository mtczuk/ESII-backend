'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInterest = sequelize.define('UserInterest', {
  }, {
    underscored: true,
    tableName: 'user_interest',
  });
  UserInterest.associate = function(models) {
    // associations can be defined here
  };
  return UserInterest;
};