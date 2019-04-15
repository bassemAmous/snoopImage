const mainHandler = require('./src/main');


mainHandler.handleMain();

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
})
