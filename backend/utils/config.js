require('dotenv').config();

let PORT = process.env.PORT

const {MONGODB_URI} = process.env;

module.exports = {
  MONGODB_URI,
  PORT,
};
