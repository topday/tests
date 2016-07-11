var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', function(req, res) {
  var userData = req.db.get('userdata');
  userData.find({}, {limit:10}, function(e, json) {
    res.json(json);
  });
});

module.exports = router;
