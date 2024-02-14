const config = require('./utils/config')
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger')


const concretesRouter = require('./controllers/concretes');

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

app.use('/api/concrete', concretesRouter)


module.exports = app;
