const jwt = require('jsonwebtoken');
const User = require('../models/user');
const logger = require('./logger');

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
}
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
}

// Middleware for handling errors
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  } if (error.name === 'JsonWebTokenError') {
    return response.status(400).json({ error: 'token missing or invalid' });
  } if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired',
    });
  }

  next(error);
};

// Token extraction from authorization request header
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.replace('Bearer ', '');
    request.token = token;
  }
  next();
};

// User extraction from token
const userExtractor = async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'invalid token' });
    }
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return response.status(401).json({ error: 'user not found' });
    }
    request.user = user;
  } catch (error) {
    return response.status(401).json({ error: 'invalid or missing token' });
  }
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
}