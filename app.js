const express = require('express');
const morgan = require('morgan');

/*
 * Routers
 * */
const tourRouter = require('./app/routes/tourRoutes');
const userRouter = require('./app/routes/userRoutes');

/*
 * Create instance app of express
 * */
const app = express();

/*
 * Global Middlewares
 * */
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

/*
 * Mount routers
 * */
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
