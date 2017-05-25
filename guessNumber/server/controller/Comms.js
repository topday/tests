'use strict';
const mvc = require('./../library/mvc');
const request = require('request');

class CommsController extends mvc {

  indexAction(req, res) {

    res.send('index');
  }

  emailAction(req, res) {
/*
│{ name: 'adasd',
│  mob: '07873245980',
│  email: 'vitas@topday.lc',
│  subject: 'angular cheat sheet',
│  message: 'asd' }
*/

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    request.post('https://uk.find1st.eu/home/topday/').form(req.body)

    // console.log(req.body);

    res.send('<h3>Thank You</h3>');
  }
}

module.exports = function(req, res) {
  new CommsController(req, res);
}

