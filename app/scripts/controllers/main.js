'use strict';

angular.module('fallpicsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.url = '';
    $scope.result = '';
    //$http.get('/api/awesomeThings').success(function(awesomeThings) {
      //$scope.awesomeThings = awesomeThings;
    //});

    $scope.scan = function() {
      //alert($scope.url);
      $http.get('api/scan', {url: $scope.url}).success(function(data, status) {
        $scope.result = data;
        console.log($scope.result);
      });
    }
  });
