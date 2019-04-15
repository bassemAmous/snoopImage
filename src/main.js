
const Flickr = require('flickrapi');
const command = require('./commands/commands');

const flickrManagement = require('./flickrManagement/index');

const config = require('../conf/config');

const flickrOptions = {
  api_key: config.api_key,
  secret: config.secret,
  requestOptions: {
    timeout: 20000,
  },
};

/**
 * main call command and flickrManagement
 */
function handleMain() {
  Flickr.tokenOnly(flickrOptions, async (error, flickr) => {
    const keywords = command.commandMain();
    const allImages = await new Promise((async resolve => {
      const downloadedImages = [];
      flickrManagement.downloadAllImagesFromFlickr(keywords, flickr, downloadedImages, resolve);
    }));
    flickrManagement.collageImages(allImages);
  });
}

module.exports = {
  handleMain,
};
