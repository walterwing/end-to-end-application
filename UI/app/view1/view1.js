'use strict';

function provider($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Controller as View1Ctrl'
  });
}

function View1Controller() {
  var vm = this;
  vm.value = 'test';
}

angular
  .module('e2eApp.view1', ['ngRoute'])
  .config(['$routeProvider', provider])
  .controller('View1Controller', [View1Controller]);
