// const { unique } = require('lodash')
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  name: String,
  email: String,
  passwordHash: {
    type: String,
    required: true,
    minlength: 3,
  },
  role: String,
});

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed, therefore it is not returned
    delete returnedObject.passwordHash;
  }
})



const User = mongoose.model('User', userSchema);

module.exports = User;