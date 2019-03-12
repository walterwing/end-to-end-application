'use strict';

function appVersion(version) {
  return function replaceVersion(scope, elm) {
    elm.text(version);
  };
}

angular
  .module('e2eApp.version.version-directive', [])
  .directive('appVersion', ['version', appVersion]);
