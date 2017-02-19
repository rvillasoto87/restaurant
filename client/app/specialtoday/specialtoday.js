'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('specialtoday', {
        url: '/specialtoday',
        templateUrl: 'app/specialtoday/specialtoday.html',
        controller: 'SpecialtodayCtrl'
      });
  });