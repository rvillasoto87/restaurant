'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservation', {
        url: '/reservation',
        templateUrl: 'app/reservation/reservation.html',
        controller: 'ReservationCtrl'
      });
  });