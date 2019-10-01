'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    distanciaMaxima: DataTypes.INTEGER,
    valorMaximo: DataTypes.INTEGER,
    recomendacoes: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};

// npx sequelize-cli model:generate --name usuario --attributes id:integer,nome:string,email:string,senha:string,distanciaMaxima:integer,valorMaximo:integer,recomendacoes:integer,cep:integer,rua:string,numero:integer,bairro:string,cidade:string