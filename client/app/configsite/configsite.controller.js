'use strict';

angular.module('myNewAppApp')
  .controller('ConfigsiteCtrl', function ($scope,$http) {
    $scope.conf = {};

    $http.get('/api/configs').success(function(conf){
      $scope.conf = conf;
      socket.syncUpdates('config', $scope.conf);
    });

    $scope.Update = function(){
      $http.put('/api/configs/'+$scope.conf._id,$scope.conf).success(function(){
        $scope.message = true;
      });
    };
  });
