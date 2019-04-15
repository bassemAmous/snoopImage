const fs = require('fs');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


async function newFileName(index = 0) {
  const path = `./images/collageImages/collage${index}.jpg`;

  try {
    if (fs.existsSync(path)) {
      index++;
      return newFileName(index);
    }
    return path;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getRandomInt,
  newFileName,
};
