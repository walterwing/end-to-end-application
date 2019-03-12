'use strict';

describe('e2eApp.version module', function testVersionModule() {
  beforeEach(module('e2eApp.version'));

  describe('app-version directive', function testVersionDirective() {
    it('should print current version', function testCurrentVersion() {
      module(function provider($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function testVersion($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);

        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
