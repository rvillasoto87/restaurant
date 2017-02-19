'use strict';

angular.module('myNewAppApp')
  .factory('Pay', ['$resource', function($resource){
    return $resource('/api/pays',{
      create:{
        method: 'POST'
      }
    });
  }]);
