const Sequelize = require('sequelize');
const {DATABASE_CONNECTION_STRING, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME} = require('./settings')

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {'host': DATABASE_HOST, 'dialect': 'mysql'})


try {
  sequelize.authenticate();
  console.log("Connected to the database!")
}
catch(error) {
  console.error("Error in database connection", error)
}

module.exports = {'connection': sequelize}
