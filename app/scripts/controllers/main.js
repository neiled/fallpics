'use strict';

angular.module('fallpicsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.blog = 'fuckyeahlegos';
    //$http.get('/api/awesomeThings').success(function(awesomeThings) {
      //$scope.awesomeThings = awesomeThings;
    //});

    $scope.scan = function() {
      $http.get('api/scan', {params: {blog: $scope.blog}}).success(function(data, status) {
        $scope.photolist = data;
        console.log($scope.photolist);
      });
    }
  });
