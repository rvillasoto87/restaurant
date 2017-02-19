'use strict';

angular.module('myNewAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth,$modal) {
    $scope.submenu = [
      {
        'title': 'Day Menu',
        'link': '/menudia'
      },
      {
        'title': 'Week Menu',
        'link': '/menuweek'
      },{
        'title': 'Specials today',
        'link': '/specialtoday'
      }];
    $scope.home = {
      'title': 'Home',
      'link': '/'
    }
    $scope.menu = [{
      'title': 'Reservation',
      'link': '/reservation'
    },{
      'title': 'Gallery',
      'link': '/gallery'
    },{
      'title': 'Contact',
      'link': '/contact'
    }];
    $scope.configure = {
      'title': 'Configuracion',
      'link': '/Configuracion'
    };
    $scope.config = [{
      'title': 'Site',
      'link': '/configsite'
    },
      {
        'title': 'Menu',
        'link': '/configmenu'
      },{
        'title': 'Reservation',
        'link': '/viewreser'
      }];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.modal = function(){
      var modalInstance = $modal.open({
        templateUrl: '../../app/reservation/modal.html',
        controller:'MreservarCtr',
        resolve:{
          reserv: function(){
            return $scope.pay;
          }
        }
      });
    };
  }).controller('MreservarCtr',function($scope,$modalInstance,$http){
    $scope.formData = {};
    $scope.visible = false;
    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };

    $scope.submitForm = function(formData){
      $http.post('/api/reservations/',{date:$scope.formData.date,firstname:$scope.formData.firstname,lastname:$scope.formData.lastname,email:$scope.formData.email,phone:$scope.formData.phone,peopleamount:$scope.formData.amount,time:$scope.formData.time});
      $modalInstance.close();
    }

    $scope.MostrarBoton = function(){
      $scope.visible = true;
    };

  });
