'use strict';

angular.module('e2eApp.version', [
  'e2eApp.version.interpolate-filter',
  'e2eApp.version.version-directive'
])

.value('version', '0.1');
