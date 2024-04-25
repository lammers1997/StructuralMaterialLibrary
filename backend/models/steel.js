const mongoose = require('mongoose');

const steelSchema = mongoose.Schema({

  name: String,
  f_yk: {
    value: Number,
    unit: String,
  },
  E: {
    value: Number,
    unit: String,
  },
  density: {
    value: Number,
    unit: String,
  },
});

steelSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Steel', steelSchema);