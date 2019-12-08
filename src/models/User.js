module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    radius: DataTypes.INTEGER,
    street: DataTypes.STRING,
    number_home: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    neighbourhood: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'users',
  });
  return User;
};
