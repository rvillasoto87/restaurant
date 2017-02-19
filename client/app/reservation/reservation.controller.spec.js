'use strict';

describe('Controller: ReservationCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewAppApp'));

  var ReservationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReservationCtrl = $controller('ReservationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
