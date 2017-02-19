'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewreserv', {
        url: '/viewreserv',
        templateUrl: 'app/viewreserv/viewreserv.html',
        controller: 'ViewreservCtrl'
      });
  });