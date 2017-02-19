'use strict';

angular.module('myNewAppApp')
  .controller('ReservationCtrl', function ($scope,$http) {
    $scope.reserv = {};
    $scope.visible = false;
    $scope.Submit = function(){
      alert($scope.reserv.date);
      $http.post('/api/reservations',{
                          firstname:$scope.reserv.firstname,
                          lastname:$scope.reserv.lastname,
                          email:$scope.reserv.email,
                          phone:$scope.reserv.phone,
                          peopleamount:$scope.reserv.numguest,
                          sugerencia:$scope.reserv.suggest,
                          date:$scope.reserv.date
          }).success(function(){
                $scope.reserv.firstname = "";
                $scope.reserv.lastname = "";
                $scope.reserv.email = "";
                $scope.reserv.phone = "";
                $scope.reserv.numguest = "";
                $scope.reserv.suggest = "";
                $scope.reserv.date = "";
      });
    }


  });
