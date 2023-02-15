const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const usersRoutes = require('./routes/users-routes.js');
const productsRoutes = require('./routes/products-routes.js');

// Configure middleware for express
server.use( bodyParser.urlencoded( {extended: false} ) );
server.use( bodyParser.json() );

dbURL="mongodb+srv://admin01:makeithappen53@cluster0.vxdoffd.mongodb.net/swappy_db?retryWrites=true&w=majority";

const dbConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
};

mongoose
.connect(dbURL, dbConfig) // Promise
.then(
    function() {
        console.log('DB is connected.')
    }
)
.catch(
    function(connectionError) {
        console.log('Connection error', connectionError);
    }
);


server.get('/',
    function(req, res) {
        res.send("Hello!");
    }
);


// http://localhost:3001/users/
server.use('/users', usersRoutes);

// http://localhost:3001/products/
server.use('/products', productsRoutes);


server.listen(
    3001,
    function() {
        console.log('Running on http://localhost:3001/')
    }
);