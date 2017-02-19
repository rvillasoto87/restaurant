'use strict';

describe('Service: Configure', function () {

  // load the service's module
  beforeEach(module('myNewAppApp'));

  // instantiate service
  var Configure;
  beforeEach(inject(function (_Configure_) {
    Configure = _Configure_;
  }));

  it('should do something', function () {
    expect(!!Configure).toBe(true);
  });

});
