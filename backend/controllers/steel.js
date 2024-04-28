const steelRouter = require('express').Router();
const Steel = require('../models/steel');

// get all steels
steelRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const steelData = await Steel.find({});
  response.json(steelData);
});

// Add new steel material
steelRouter.post('/', async (request, response) => {
  console.log('Adding');
  const { body } = request;

  // Make sure atleast NAME exists
  if (!body.name) {
    return response.status(400).json({ error: 'Both, title and url are required' })
  }
  console.log(body);
  // Create new blog
  const steelMaterial = new Steel(body);
  const savedSteelMat = await steelMaterial.save();
  // add new material to database

  response.status(201).json(savedSteelMat);
});

steelRouter.delete('/:id', async (request, response) => {
  const steelMat = await Steel.findById(request.params.id);
  if (steelMat) {
    await Steel.findByIdAndDelete(request.params.id);
  } else {
    response.status(404).json({ error: 'Material not found' });
  }
  response.status(204).end();
});

module.exports = steelRouter;
