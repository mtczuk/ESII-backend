/* eslint no-unused-vars: 0 */

module.exports = (sequelize, DataTypes) => {
  const UserInterest = sequelize.define('UserInterest', {
  }, {
    underscored: true,
    tableName: 'user_interest',
  });
  UserInterest.associate = (models) => {
    // associations can be defined here
  };
  return UserInterest;
};
