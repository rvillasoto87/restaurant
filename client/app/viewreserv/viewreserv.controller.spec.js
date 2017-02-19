'use strict';

describe('Controller: ViewreservCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var ViewreservCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewreservCtrl = $controller('ViewreservCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
