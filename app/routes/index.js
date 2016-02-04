'use strict';
module.exports = function(app, io) {
  app.get('/', function(req, res) {
    //send the index.html in our public directory
    res.sendfile('index.html');
  });
  require('./chat')(app);
  require('./socket')(io);
};
