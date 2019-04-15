const utils = require('../utils/utils')

const dictionnary = require('./words');

function getWordFromDictionnary() {
  return dictionnary[utils.getRandomInt(dictionnary.length)];
}
module.exports = {
  getWordFromDictionnary
}
