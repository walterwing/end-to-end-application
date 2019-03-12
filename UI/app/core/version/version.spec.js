'use strict';

describe('e2eApp.version module', function testVersionModule() {
  beforeEach(module('e2eApp.version'));

  describe('version service', function testVersionService() {
    it('should return current version', inject(function testVersion(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
