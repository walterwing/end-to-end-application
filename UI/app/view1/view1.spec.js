'use strict';

describe('e2eApp.view1 module', function testView1Module() {
  beforeEach(module('e2eApp.view1'));

  describe('view1 controller', function testView1Controller() {
    it('should ....', inject(function testController($controller) {
      // spec body
      var View1Controller = $controller('View1Controller');

      expect(View1Controller).toBeDefined();
    }));
  });
});
