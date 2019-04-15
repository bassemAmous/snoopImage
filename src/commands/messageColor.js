
const colors = require('colors');

function displayErrorMessage(txt) {
  return colors.red(txt); // display the help text in red on the console
}


function displaySucessMessage(txt) {
  return colors.green(txt); // display the success text in green on the console
}


module.exports = {
  displaySucessMessage,
  displayErrorMessage,
};
