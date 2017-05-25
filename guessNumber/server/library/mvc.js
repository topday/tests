const fs = require('fs');

class MVCController {

  constructor(req, res) {
    var actionName = this.getActionName(req.url);

    if (actionName) {

      this.actionName = actionName + 'Action';
    }

    this[this.actionName](req, res);
  }

  getActionName(url) {
    var URLNodes = url.split('/');

    return URLNodes[2];
  }
}

module.exports = MVCController;
