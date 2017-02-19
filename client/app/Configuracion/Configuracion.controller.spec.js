'use strict';

describe('Controller: ConfiguracionCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var ConfiguracionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiguracionCtrl = $controller('ConfiguracionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
