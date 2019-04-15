const mainHandler = require('./src/main');


mainHandler.handleMain();

process.on('unhandledRejection', (reason) => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
})
