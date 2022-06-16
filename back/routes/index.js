var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(process.env.FRONT_URL);
});

module.exports = router;
