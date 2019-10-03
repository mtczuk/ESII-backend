'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define('Interest', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_path: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'interest',
  });
  Interest.associate = function(models) {
    Interest.belongsToMany(models.User, {as: 'user', through: 'user_interest', foreignKey: 'interest_id'})
  };
  return Interest;
};