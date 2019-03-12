'use strict';

function provider($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Controller as View2Ctrl'
  });
}

function View2Controller() {

}

angular
  .module('e2eApp.view2', ['ngRoute'])
  .config(['$routeProvider', provider])
  .controller('View2Controller', [View2Controller]);
