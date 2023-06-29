const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3006;

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
