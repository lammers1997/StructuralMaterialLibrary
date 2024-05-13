const steelRouter = require('express').Router();
const Steel = require('../models/steel');
const User = require('../models/user');
const { userExtractor } = require('../utils/middleware');

// get all steels
steelRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const steelData = await Steel.find({});
  response.json(steelData);
});

// Add new steel material
steelRouter.post('/', userExtractor, async (request, response) => {
  console.log('Adding');
  const { body } = request;

  // Make sure atleast NAME exists
  if (!body.name) {
    return response.status(400).json({ error: 'Both, title and url are required' })
  }
  if (request.user.role !== 'admin') {
    return response.status(401).json({ error: 'Admin role is required' });
  }
  // Check if a material with the same name already exists
  const existingMaterial = await Steel.findOne({ name: body.name });

  if (existingMaterial) {
    return response.status(400).json({ error: 'Material with the same name already exists' });
  }
  // Create new steel material
  const steelMaterial = new Steel(body);
  const savedSteelMat = await steelMaterial.save();
  // add new material to database

  return response.status(201).json(savedSteelMat);
});

steelRouter.delete('/:id', userExtractor, async (request, response) => {
  const userId = request.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return response.status(401).json({ error: 'Admin role is required' });
    }

    const steelMat = await Steel.findById(request.params.id);

    if (!steelMat) {
      return response.status(404).json({ error: 'Material not found' });
    }

    await Steel.findByIdAndDelete(request.params.id);
    return response.status(204).end();
  } catch (error) {
    console.error('Error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = steelRouter;
