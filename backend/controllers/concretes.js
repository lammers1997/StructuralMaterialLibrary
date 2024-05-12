const concretesRouter = require('express').Router();
const Concrete = require('../models/concrete');
const User = require('../models/user');
const { userExtractor } = require('../utils/middleware');

// get all concretes
concretesRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const concreteData = await Concrete.find({});
  response.json(concreteData);
});

// Add new concrete material
concretesRouter.post('/', userExtractor, async (request, response) => {
  const { body } = request;

  // Make sure atleast NAME exists
  if (!body.name) {
    return response.status(400).json({ error: 'Both, title and url are required' })
  }
  if (request.user.role !== 'admin') {
    return response.status(401).json({ error: 'Admin role is required' });
  }
  // Check if a material with the same name already exists
  const existingMaterial = await Concrete.findOne({ name: body.name });

  if (existingMaterial) {
    return response.status(400).json({ error: 'Material with the same name already exists' });
  }
  // Create new concrete material
  const concreteMaterial = new Concrete(body);
  const savedConcreteMat = await concreteMaterial.save();
  // add new material to database

  response.status(201).json(savedConcreteMat);
});

concretesRouter.delete('/:id', userExtractor, async (request, response) => {
  const userId = request.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return response.status(401).json({ error: 'Admin role is required' });
    }

    const concreteMat = await Concrete.findById(request.params.id);

    if (!concreteMat) {
      return response.status(404).json({ error: 'Material not found' });
    }

    await Concrete.findByIdAndDelete(request.params.id);
    return response.status(204).end();
  } catch (error) {
    console.error('Error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = concretesRouter;
