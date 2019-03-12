'use strict';

function provider($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/view1' });
}

// Declare app level module which depends on views, and core components
angular
  .module('e2eApp', [
    'ngRoute',
    'e2eApp.view1',
    'e2eApp.view2',
    'e2eApp.version'
  ])
  .config(['$locationProvider', '$routeProvider', provider]);
