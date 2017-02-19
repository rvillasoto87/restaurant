'use strict';

angular.module('myNewAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Configuracion', {
        url: '/Configuracion',
        templateUrl: 'app/Configuracion/Configuracion.html',
        controller: 'ConfiguracionCtrl',
        authenticate:true
      });
  });
