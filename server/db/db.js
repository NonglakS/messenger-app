const Sequelize = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.DATABASE_URL ||'messenger', 'emmi', process.env.PGPASSWORD, {
  host: 'localhost',
  dialect:'postgres',
  logging: false
});

module.exports = db;
