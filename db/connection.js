const { Sequelize } = require('sequelize');

// Replace 'your_database_name', 'your_username', and 'your_password' with your actual database credentials
const sequelize = new Sequelize('Test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database is connected');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
