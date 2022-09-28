const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:Up123pU!@localhost:3306/polls')


try {
  sequelize.authenticate();
  console.log("Connected to the database!")
}
catch(error) {
  console.error("Error in database connection", error)
}

module.exports = {'connection': sequelize}
