const concretesRouter = require('express').Router();
const Concrete = require('../models/concrete');

// get all concretes
concretesRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const concreteData = await Concrete
    .find({});
  response.json(concreteData);
});


// Add new concrete material
concretesRouter.post('/', async (request, response) => {
  console.log('Adding');
  const { body } = request;

  // Make sure atleast NAME exists
  if (!body.name) {
    return response.status(400).json({ error: 'Both, title and url are required' })
  }
  console.log(body);
  // Create new blog
  const concreteMaterial = new Concrete(body);
  const savedConcreteMat = await concreteMaterial.save();
  // add new material to database

  response.status(201).json(savedConcreteMat);
});
module.exports = concretesRouter;
