var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res, next) {
  res.send('Hello from module x');
});

module.exports = router;
