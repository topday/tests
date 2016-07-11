// Define the servicing project module
var project = angular.module('project', []);

project.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

project.controller('menuList', function menuList($scope) {
  $scope.menuItems = [
    {
      name: 'Survey',
      link: '/user/survey',
      snippet: 'Submit a survey'
    }, {
      name: 'Recent Posts',
      link: '/',
      snippet: 'Quick overview of recent posts'
    }];
});
