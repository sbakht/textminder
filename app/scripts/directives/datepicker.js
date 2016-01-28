'use strict';

/**
 * @ngdoc directive
 * @name twitterApp.directive:datePicker
 * @description
 * # datePicker
 */
angular.module('twitterApp')
  .directive('datePicker', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $(element).datepicker();
      }
    };
  });
