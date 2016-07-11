var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var nodes = req.originalUrl.split('/');
  var partialNode = nodes[2] || 'index';
  var callback = function(countries) {
    res.render('index', { 
      title: 'TOPDAY - NG1 + Express',
      partial: partialNode,
      countries: countries
    });
  };
  var region = new req.countries('europe');

  if (partialNode == 'survey') {
    region.getCountries(callback);
  } else if (partialNode == 'save') {
    callback();
  } else {
    callback();
  }
});

module.exports = router;
