'use strict';

angular.module('myNewAppApp')
  .directive('uploader', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the uploader directive');
      }
    };
  });