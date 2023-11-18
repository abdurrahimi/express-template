const dotenv = require('dotenv');
dotenv.config();

const driver = 'postgres';
const config = {
  postgres: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432
  }
};

const databaseConfig = {
  development: config[driver],
  test: config[driver],
  production: config[driver]
};

module.exports = databaseConfig[process.env.APP_ENV];