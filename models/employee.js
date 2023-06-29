const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection'); // Assuming you have set up the database connection

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more fields as per your requirements
});

// Synchronize the model with the database and print "Table is added" if successful
Employee.sync()
  .then(() => {
    console.log('Table is added');
  })
  .catch((error) => {
    console.error('Unable to add table:', error);
  });

module.exports = Employee;
