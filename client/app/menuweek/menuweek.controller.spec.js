'use strict';

describe('Controller: MenuweekCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var MenuweekCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuweekCtrl = $controller('MenuweekCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
