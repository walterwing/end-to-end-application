'use strict';

function interpolateVersion(version) {
  return function formatText(text) {
    return String(text).replace(/%VERSION%/mg, version);
  };
}

angular
  .module('e2eApp.version.interpolate-filter', [])
  .filter('interpolate', ['version', interpolateVersion]);
