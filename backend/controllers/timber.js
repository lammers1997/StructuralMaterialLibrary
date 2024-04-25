const timberRouter = require('express').Router();
const Timber = require('../models/timber');

// get all timbers
timberRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const timberData = await Timber
    .find({});
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

timberRouter.delete('/:id', async (request, response) => {
  const timberMat = await Timber.findById(request.params.id);
  if (timberMat) {
    await Timber.findByIdAndDelete(request.params.id);
  } else {
    response.status(404).json({ error: 'Material not found' });
  }
  response.status(204).end();
});

module.exports = timberRouter;
