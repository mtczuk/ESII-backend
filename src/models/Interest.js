module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define('Interest', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_path: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'interest',
  });
  Interest.associate = (models) => {
    Interest.belongsToMany(models.User, { as: 'users', through: 'user_interest', foreignKey: 'interest_id' });
  };
  return Interest;
};
