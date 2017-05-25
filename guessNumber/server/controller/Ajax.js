const fs = require('fs');

module.exports = function(req, res) {

  const sess = req.session;

  this.constructor = function() {

    var actionMethod = this.getAction(req.url);

    this[actionMethod]();
  };

  this.registerAction = function() {

    if (sess.auth === undefined) {

      sess.auth = false;
    }

    sess.user = req.body

    res.json({success: true});
  }

  this.loginAction = function() {
    var email = req.param('email');
    var password = req.param('password');

    if (sess.user
        && sess.user.email === email
        && sess.user.password === password) {

      sess.auth = true;

      res.json({auth: true});
    }

    res.json({auth: false});
  }

  this.logoutAction = function() {

    sess.auth = false;

    res.json({auth: false});
  }

  this.getAction = function(url) {
    var URLNodes = url.split('/');

    this.action = URLNodes[2];

    return this.action + 'Action';
  };
  this.constructor();
};
