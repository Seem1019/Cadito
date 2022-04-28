import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose'


import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';
import reviewsRouter from './routes/reviews.js';
import cartsRouter from './routes/carts.js';
import historiesRouter from './routes/histories.js';



const app = express();

//Middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//settings
const port = process.env.PORT || 8080;
app.use(express.json());



// Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/reviews', reviewsRouter);
app.use('/cart', cartsRouter);
app.use('/history', historiesRouter);


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

