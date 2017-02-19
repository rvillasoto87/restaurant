'use strict';

describe('Controller: ConfigmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var ConfigmenuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigmenuCtrl = $controller('ConfigmenuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
