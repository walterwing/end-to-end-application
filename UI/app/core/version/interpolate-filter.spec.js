'use strict';

describe('e2eApp.version module', function testVersionModule() {
  beforeEach(module('e2eApp.version'));

  describe('interpolate filter', function testInterpolateFilter() {
    beforeEach(module(function provider($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function testFilter(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
