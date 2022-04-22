
const express = require('express');
const app = express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


//settings
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(express.json());
app.use(require('./routes/routes'));


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});