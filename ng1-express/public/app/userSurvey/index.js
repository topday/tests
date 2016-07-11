project.controller('userSurvey', ['$scope', '$window', '$http', function ($scope, $window, $http) {
  $scope.context = {};

  
  $http.get('/user/statistics').success(function(d) {
    console.log(data);
  });
  
  $scope.countries = JSON.parse(angular.copy($window.countries));

  $scope.reset = function() {
    $scope.user = {};
  };

  $scope.update = function(user) {
    $scope.context = angular.copy(user);
    var res = $http.post('/user/save/', user);
    res.success(function(data, status, headers, config) {
      $scope.message = data;
    });
    res.error(function(data, status, headers, config) {
      alert( "failure message: " + JSON.stringify({data: data}));
    }); 
  };
}]);

project.controller('userHistry', ['$scope', '$http', function ($scope, $http) {
  $scope.surveys = {};
 
  $http.get('/user/statistics').success(function(data) {

    $scope.surveys = data;
    console.log(data);
  });


  
}]);

