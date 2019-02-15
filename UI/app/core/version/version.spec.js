'use strict';

describe('e2eApp.version module', function() {
  beforeEach(module('e2eApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
