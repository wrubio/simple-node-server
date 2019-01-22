// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// init variables
var app = express();

/**
 * BODYPARSER 
 * @parse application/x-www-form-urlencoded
 * @parse application/json
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import routes
var appRoutes = require('./routes/app');
var usersRoutes = require('./routes/users');
var loginRoutes = require('./routes/login');

// Database connection
mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos \x1b[36m%s\x1b[0m', 'Conectada!');
});

// routes
app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

// Listen requires
app.listen(3000, () => {
    console.log(' Server Node/Express is listening in port: \x1b[36m%s\x1b[0m', '3000');
})