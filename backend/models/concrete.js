const mongoose = require('mongoose');

const concreteSchema = mongoose.Schema({

  name: String,
  f_ck: {
    value: Number,
    unit: String,
  },
  f_ckcube: {
    value: Number,
    unit: String,
  },
  f_ctm: {
    value: Number,
    unit: String,
  },
  fctk05: {
    value: Number,
    unit: String,
  },
  fctk95: {
    value: Number,
    unit: String,
  },
  Ecm: {
    value: Number,
    unit: String,
  },
  epsilon_c1: {
    value: Number,
    unit: String,
  },
  density: {
    value: Number,
    unit: String,
  },
  thermal_conductivity: {
    value: Number,
    unit: String,
  },
});

concreteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Concrete', concreteSchema);

