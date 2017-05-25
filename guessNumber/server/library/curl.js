var http = require("http");
var https = require("https");

var model = function(param, callback) {
    var output = {
        error: true
    };
    var options = {
      host: 'ipinfo.io',
      port: 80,
      path: '/',
      method: 'GET'
    };

    var data = '';

    if (!param.host) {
        output.message = 'Missing URL';
        console.log(output);
    }

    if (!param.path) {
        output.message = 'Missing Path';
        console.log(output);
    }

    if (!output.message) {
        output.error = false;
    }

    options.host = param.host;
    options.path = param.path;

    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {

            if (res.statusCode == 200) {

                data += chunk;
            }
        });

        res.on('end', function() {

            callback(JSON.parse(data), output);
        });
    });

    req.on('error', function(e) {
        output.message = e.message;
        output.type = 'request failed';
        console.log(output);
    });

    req.end();

};

var respond = function() {
    return {
         get: model
    };
}

module.exports.CURLRequest = respond();;
