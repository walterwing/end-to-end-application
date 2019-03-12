'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('e2e app', function testMyApp() {
  it('should automatically redirect to /view1 when location hash/fragment is empty', function testDefaultLocation() {
    browser.get('index.html');

    expect(browser.getLocationAbsUrl()).toMatch('/view1');
  });

  describe('view1', function testView1() {
    beforeEach(function setup() {
      browser.get('index.html#!/view1');
    });


    it('should render view1 when user navigates to /view1', function verifyText() {
      expect(element.all(by.css('[ng-view] p')).first().getText())
        .toMatch('This is the partial for view 1. test');
    });
  });


  describe('view2', function testView2() {
    beforeEach(function setup() {
      browser.get('index.html#!/view2');
    });

    it('should render view2 when user navigates to /view2', function verifyText() {
      expect(element.all(by.css('[ng-view] p')).first().getText())
        .toMatch(/partial for view 2/);
    });
  });
});
