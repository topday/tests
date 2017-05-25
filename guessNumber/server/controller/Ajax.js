const fs = require('fs');

module.exports = function(req, res) {

  const viewDir = __dirname + '/../view/';

  this.constructor = function() {
    var content = this.getContent(req.url) || '404';

    res.send(content);
  };

  this.getAction = function(url) {
    var URLNodes = url.split('/');

    return this.action = URLNodes[2];
  };

  this.getContent = function(url) {
    var URLNodes = url.split('/');
    var action = this.getAction(url);
    var templateFile = URLNodes[3] || 'index';
    var filePath = viewDir + '/' + action + '/' + templateFile + '.html';

    return fs.readFileSync(filePath);
  }

  this.constructor();
};
