'use strict';

angular.module('myNewAppApp')
  .controller('ContactCtrl', function ($scope,$http) {
    $scope.config = {};

    $http.get('/api/configs').success(function(conf){
      $scope.config = conf;
      socket.syncUpdates('config', $scope.config);
    });

    $scope.Submit = function(){
      $http.post('/api/contacts',{name:$scope.contact.name,email:$scope.contact.email,message:$scope.contact.message}).success(function(){
        $scope.contact.name = "";
        $scope.contact.email = "";
        $scope.contact.message = "";
      });
    };
  });
