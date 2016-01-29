'use strict';

describe('Directive: dateValidate', function () {

  // load the directive's module
  beforeEach(module('twitterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-validate></date-validate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dateValidate directive');
  }));
});
