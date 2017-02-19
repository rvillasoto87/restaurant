'use strict';

angular.module('myNewAppApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
  $scope.config = {};

    $http.get('/api/configs').success(function(conf){
      $scope.config = conf;
      socket.syncUpdates('config', $scope.config);
    });
  });
