require('dotenv').config();

const config = {
  // flirkr api key
  api_key: process.env.API_KEY,
  // flirkr secret
  secret: process.env.SECRET,
};

module.exports = config;

console.log('loaded config: global default'); // eslint-disable-line
