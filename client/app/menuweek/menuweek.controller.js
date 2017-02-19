'use strict';

angular.module('myNewAppApp')
  .controller('MenuweekCtrl', function ($scope,$http) {
    $scope.semana = [];
    $http.get('/api/menus/semana').success(function(menus){
      $scope.semana = menus;
      socket.syncUpdates('menu', $scope.semana);
    });
  });
