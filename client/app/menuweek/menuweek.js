'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menuweek', {
        url: '/menuweek',
        templateUrl: 'app/menuweek/menuweek.html',
        controller: 'MenuweekCtrl'
      });
  });
