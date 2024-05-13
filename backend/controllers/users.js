const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');
const validator = require('email-validator');


// Get all users. Might not be necessary for my app..
usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

// Handle register
usersRouter.post('/', async (request, response) => {
  const { username, name, email, password } = request.body;

  // Name
  if (name === '') { // make sure name exists
    return response.status(400).json({ error: 'name missing' });
  }

  // Password
  if (password === undefined) { // make sure password exists
    return response.status(400).json({ error: 'password missing' });
  }
  if (password.length < 3) { // make sure password is long enough
    return response.status(400).json({ error: 'password must be at least 3 characters long' });
  }

  // Username
  if (username.length < 3) {
    return response.status(403).json({ error: 'username must be atleast 3 characters long' });
  }
  const isUsernameAvailable = await User.findOne({ username });
  if (isUsernameAvailable) {
    return response.status(409).json({ error: `${username} already exists, try another.` });
  }

  //Email
  if (!validator.validate(email)) {
    return response.status(400).json({ error: 'invalid email' });
  }
  const isEmailAvailable = await User.findOne({ email });
  if (isEmailAvailable) {
    return response.status(409).json({ error: 'email is already taken' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const role = 'user';

  const user = new User({
    username,
    name,
    email,
    passwordHash,
    role,
  });
  const savedUser = await user.save();
  return response.status(201).json(savedUser);
});

module.exports = usersRouter;
