'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menudia', {
        url: '/menudia',
        templateUrl: 'app/menudia/menudia.html',
        controller: 'MenudiaCtrl'
      });
  });
