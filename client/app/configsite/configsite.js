'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('configsite', {
        url: '/configsite',
        templateUrl: 'app/configsite/configsite.html',
        controller: 'ConfigsiteCtrl'
      });
  });