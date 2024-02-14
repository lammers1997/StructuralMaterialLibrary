const concretesRouter = require('express').Router();
const Concrete = require('../models/concrete');

// get all concretes
concretesRouter.get('/', async (request, response) => {
  console.log('Retrieving');
  const concreteData = await Concrete
    .find({});
  response.json(concreteData);
});

module.exports = concretesRouter;
