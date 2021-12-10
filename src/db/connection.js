require("dotenv").config();
const { Sequelize } = require("sequelize"); //class constructor { Sequelize } is pulling method from sequelize

const sequelize = new Sequelize(process.env.MYSQL_URI); // new Sequelize with upper case 'S'

sequelize.authenticate(); //node src/db/connection.js will test that the connection is working

module.exports = sequelize;