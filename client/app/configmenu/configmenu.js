'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('configmenu', {
        url: '/configmenu',
        templateUrl: 'app/configmenu/configmenu.html',
        controller: 'ConfigmenuCtrl'
      });
  });