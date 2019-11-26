// configurações do ambiente de desenvolvimento
module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'helippa_teste',
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
