'use strict';

describe('Service: PostPay', function () {

  // load the service's module
  beforeEach(module('myNewAppApp'));

  // instantiate service
  var PostPay;
  beforeEach(inject(function (_PostPay_) {
    PostPay = _PostPay_;
  }));

  it('should do something', function () {
    expect(!!PostPay).toBe(true);
  });

});
