/**
  double math function, but not closure

  var a = twins(1, 2) * 1;    #3
  var b = twins(1)(5);        #5

  console.log(a, b);
  
*/
var twins = function(a, b) {
  var results = parseInt(a) + (parseInt(b) || 0);

  var returnTwin = function(b) {
    results *= parseInt(b);
    return results;
  };

  returnTwin.toString = function() {
    return results;
  };

  return returnTwin;
};

var a = twins(1, 2) * 1;
var b = twins(1)(5);

console.log(a, b);
