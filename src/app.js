const express= require('express')
const app = express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();
var path = require('path');
var logger = require('morgan');







app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//settings
const port = process.env.PORT || 8080;
app.use(express.json());



//Routes
const users=require('./routes/users');
app.use('/users', users);


// DB configuration and connection create
  mongoose.connect(process.env.URL, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected to MongoDB");
    });



    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });

