require('dotenv').config();

// configurações do ambiente de desenvolvimento
module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'helippa_teste',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: 5432,
    dialect: 'postgres',
    ssl: true,
  },
};
