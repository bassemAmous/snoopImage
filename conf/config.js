require('dotenv').config();

if (!process.env.API_KEY || !process.env.SECRET) throw new Error('plesae set your API_KEY and SECRET');
const config = {
  // flirkr api key
  api_key: process.env.API_KEY,
  // flirkr secret
  secret: process.env.SECRET,
};

module.exports = config;

console.log('loaded config: global default'); // eslint-disable-line
