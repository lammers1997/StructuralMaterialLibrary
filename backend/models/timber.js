const mongoose = require('mongoose');

const timberSchema = mongoose.Schema({

  name: String,
  f_mk: {
    value: Number,
    unit: String,
  },
  f_t0k: {
    value: Number,
    unit: String,
  },
  f_t90k: {
    value: Number,
    unit: String,
  },
  f_c0k: {
    value: Number,
    unit: String,
  },
  f_c90k: {
    value: Number,
    unit: String,
  },
  E_0mean: {
    value: Number,
    unit: String,
  },
  E_005: {
    value: Number,
    unit: String,
  },
  E_90mean: {
    value: Number,
    unit: String,
  },
  G_mean: {
    value: Number,
    unit: String,
  },
  G_005: {
    value: Number,
    unit: String,
  },
  density_k: {
    value: Number,
    unit: String,
  },
  density_mean: {
    value: Number,
    unit: String,
  },
  thermal_conductivity: {
    value: Number,
    unit: String,
  },
});

timberSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Timber', timberSchema);