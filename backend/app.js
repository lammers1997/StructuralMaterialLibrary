const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger');

const loginRouter = require('./controllers/login');
const concreteRouter = require('./controllers/concretes');
const timberRouter = require('./controllers/timber');
const steelRouter = require('./controllers/steel');
const usersRouter = require('./controllers/users');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });


app.use(cors());
// app.use(express.static('build'));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/concrete', concreteRouter);
app.use('/api/timber', timberRouter);
app.use('/api/steel', steelRouter);

module.exports = app;
