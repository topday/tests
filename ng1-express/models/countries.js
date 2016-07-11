"use strict"; 

// retrieve countries and return in JSON format
// @source https://restcountries.eu/rest/v1/region/Europe

var http = require("http");
var privateFunc = {
  requestCountries: function(region, callback) {
    var output = {};
    var options = {
      host: 'restcountries.eu',
      port: 80,
      path: '/rest/v1/region/' + region,
      method: 'GET'
    };

    var proxy = http.request(options, function(res) {
      var data = '';
 
     //  res.setEncoding('utf8');
      res.on('data', function (chunk) {
        if (res.statusCode == 200) {
          data += chunk;
        }
      });

      res.on('end', function () {
        var output = JSON.parse(data);
        var length = output.length;
        var countries = [];
    
        for (var i = 0; i < length; i++) {
 
          countries.push(output[i].nativeName);
        }

        callback(countries);      
      });
    });

    proxy.on('error', function(e) {
        output.message = e.message;
        output.type = 'request failed';
        output.error = true;
        callback(output);
    });

    proxy.end();
  }
};

class Countries {

    // @var continent (europe|asia|Americas|Oceania)
    constructor(continent) {
      this.continent = continent || 'europe';
    }

    getCountries(callback) {
      privateFunc.requestCountries(this.continent, callback);
    }
}


module.exports = Countries;
