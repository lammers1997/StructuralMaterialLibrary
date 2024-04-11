const mongoose = require('mongoose');
const concreteMaterials = require('./concrete_materials.json');
const config = require('./config');
const Concrete = require('../models/concrete');
const logger = require('./logger');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

const saveConcreteData = async (data) => {
  const concrete = new Concrete({
    name: data.name,
    f_ck: {
      value: data.f_ck.value,
      unit: data.f_ck.unit,
    },
    f_ckcube: {
      value: data.f_ckcube.value,
      unit: data.f_ckcube.unit,
    },
    f_ctm: {
      value: data.f_ctm.value,
      unit: data.f_ctm.unit,
    },
    fctk05: {
      value: data.fctk05.value,
      unit: data.fctk05.unit,
    },
    fctk95: {
      value: data.fctk95.value,
      unit: data.fctk95.unit,
    },
    Ecm: {
      value: data.Ecm.value,
      unit: data.Ecm.unit,
    },
    epsilon_c1: {
      value: data.epsilon_c1.value,
      unit: data.epsilon_c1.unit,
    },
    density: {
      value: data.density.value,
      unit: data.density.unit,
    },
    thermal_conductivity: {
      value: data.thermal_conductivity.value,
      unit: data.thermal_conductivity.unit,
    },
  });
  await concrete.save();
};

concreteMaterials.concrete_materials.forEach(async (data) => {
  const { name } = data;
  const result = await Concrete.findOne({ name });
  if (result) {
    console.log('Data found!');
  }
  else {
    console.log('Not found');
    saveConcreteData(data);
  }
});