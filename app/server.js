const express = require('express');
const bodyParser = require('body-parser');
const { seedData} = require('./utils/data');
const reportsRouter = require('./routes/reportsRoutes.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(async () => {
    console.log('Successfully connected to the database');
    
    //await seedData();
    console.log('Data seeded successfully');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

// define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to AutoScout24 API.' });
});

reportsRouter(app);

// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port ', 3000);
});
