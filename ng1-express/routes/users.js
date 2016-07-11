var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.post('/', function(req, res) {
  console.log(req.body);
  var userData = req.db.get('userdata');

  req.body.dateCreated = new Date();

  userData.insert(req.body);
  res.send('save');
});

module.exports = router;
