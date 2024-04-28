const timberRouter = require('express').Router();
const Timber = require('../models/timber');
const User = require('../models/user');
const { userExtractor } = require('../utils/middleware');

// get all timbers
timberRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const timberData = await Timber.find({});
  response.json(timberData);
});

// Add new timber material
timberRouter.post('/', async (request, response) => {
  console.log('Adding');
  const { body } = request;

  // Make sure atleast NAME exists
  if (!body.name) {
    return response.status(400).json({ error: 'Both, title and url are required' })
  }
  console.log(body);
  // Create new blog
  const timberMaterial = new Timber(body);
  const savedTimberMat = await timberMaterial.save();
  // add new material to database

  response.status(201).json(savedTimberMat);
});

timberRouter.delete('/:id',userExtractor, async (request, response) => {
  const userId = request.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return response.status(401).json({ error: 'Admin role is required' });
    }

    const timberMat = await Timber.findById(request.params.id);

    if (!timberMat) {
      return response.status(404).json({ error: 'Material not found' });
    }

    await Timber.findByIdAndDelete(request.params.id);
    return response.status(204).end();
  } catch (error) {
    console.error('Error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = timberRouter;
