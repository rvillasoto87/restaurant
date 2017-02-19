'use strict';

describe('Controller: ConfigsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var ConfigsiteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigsiteCtrl = $controller('ConfigsiteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
