
const program = require('commander');
const colors = require('./messageColor');

const dictionaryManagement = require('../dictionnaryManagement/dictionnaryManagement');


/**
 * init Command with version and options
 */

function initCommand() {
  const options = [{
    flag: '-k, --keywords',
    description: 'List Keywords',
  }];

  program.version('0.1.0');
  for (let i = 0; i < options.length; program.option(options[i].flag, options[i].description), i++);
  program.allowUnknownOption()
    .parse(process.argv);
}


/**
 * verify if command is right or wrong
 */
function verifyCommand() {
  const NO_COMMAND_SPECIFIED = program.args.length === 0;
  const NO_KEYWORD_SPECIFIED = !program.keywords;
  if (NO_COMMAND_SPECIFIED || NO_KEYWORD_SPECIFIED) {
    program.outputHelp(colors.displayErrorMessage);
    return false;
  }
  return true;
}


/**
 * @param {string} keywords list
 * if the kewords arguments are less than ten we add from dictionnary
 */
function verifyGetTenKeywords(keywords) {
  for (; keywords.length < 10; keywords.push(dictionaryManagement.getWordFromDictionnary()));
  console.log(`the 10 keywords to download ${keywords}`);
  return keywords;
}

/**
 * get keywords from args
 */
function getKeywords() {
  if (verifyCommand(program)) return verifyGetTenKeywords(program.args);
  return [];
}


/**
 * command main
 */
function commandMain() {
  initCommand();
  return getKeywords();
}

module.exports = {
  commandMain,
};
