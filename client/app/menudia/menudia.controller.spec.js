'use strict';

describe('Controller: MenudiaCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var MenudiaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenudiaCtrl = $controller('MenudiaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
