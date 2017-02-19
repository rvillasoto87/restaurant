'use strict';

angular.module('myNewAppApp')
  .controller('ViewreservCtrl', function ($scope,$http) {
    $scope.reserv = [];

    $scope.more = function(){
      $http.get('/api/reservations').success(function(reservations){
        $scope.reserv = reservations;
        socket.syncUpdates('reservation', $scope.reserv);
      });
    }
  });
