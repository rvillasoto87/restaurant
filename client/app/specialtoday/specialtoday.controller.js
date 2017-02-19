'use strict';

angular.module('myNewAppApp')
  .controller('SpecialtodayCtrl', function ($scope,$http) {
    $scope.specials = [];

    $http.get('/api/specialtodays').success(function(specials){
      $scope.specials = specials;
      socket.syncUpdates('specialtoday', $scope.specials);
    });
  });
