const https = require('https');
const gm = require('gm');
const mergeImg = require('merge-img');
const utils = require('../utils/utils');
const dictionnaryManagement = require('../dictionnaryManagement/dictionnaryManagement');

const urls = [];


function getTopRatedImage(results) {
  if (results.photos) return results.photos.photo[0];
  return null;
}

function getUrl(photo) {
  return `https://farm${photo.farm
  }.staticflickr.com/${photo.server
  }/${photo.id}_${photo.secret}_m.jpg`;
}
async function downloadImage(url, photo, downloadedImages) {
  photo.url = url;
  return new Promise(async resolve => {
    https.get(url, (response, error) => {
      if (error) console.log(error);
      gm(response, 'image.jpg').resize(400, 400).crop(222, 400)
        .write(`./images/${photo.id}.jpg`, err => {
          console.log('image Downloaded');
          downloadedImages.push(photo);

          if (err) console.log(err);
          resolve('');
        });
    });
  });
}


function downloadImageFromFlickr(keyword, flickr, downloadedImages, resolve, keywordsLength) {
  flickr.photos.search({
    text: keyword,
    sort: 'interestingness-desc',
  }, async (err, result) => {
    console.log(`download ${keyword}`);
    const photo = getTopRatedImage(result);
    if (photo) {
      const url = getUrl(photo);
      urls.push(url);
      await downloadImage(url, photo, downloadedImages);
    } else {
      const word = dictionnaryManagement.getWordFromDictionnary();
      notFoundKeyword(keyword, word);
      downloadImageFromFlickr(word, flickr, downloadedImages, resolve, keywordsLength);
    }
    if (downloadedImages.length === keywordsLength) resolve(downloadedImages);
  });
}

function notFoundKeyword(keyword, word) {
  console.log(`keyword ${keyword} not found will be replaced with our magic dictionnary: ${word}`);
}

function downloadAllImagesFromFlickr(keywords, flickr, downloadedImages, resolve) {
  const keywordsLength = keywords.length;

  keywords.forEach(keyword => {
    downloadImageFromFlickr(keyword, flickr, downloadedImages, resolve, keywordsLength);
  });
}


function collageImages(allImages) {
  console.log('collage 10 Images starting');
  const size = 10;
  const collageImage = [];
  allImages.slice(0, size).map(img => {
    collageImage.push(`./images/${img.id}.jpg`);
  });
  mergeImg(collageImage).then(async img => {
    const fileName = await utils.newFileName();
    img.write(fileName, () => console.log(`Congratulation! collage images can be found in ${fileName}`));
  });
}

module.exports = {
  downloadAllImagesFromFlickr,
  collageImages,
};
