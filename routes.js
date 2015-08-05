'use strict';

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.redirect('/module-x');
  });
  app.use('/module-x', require('./index'));
}