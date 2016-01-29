'use strict';

/**
 * @ngdoc directive
 * @name textminder.directive:datePicker
 * @description
 * # datePicker
 */
angular.module('textminder')
.directive('datePicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function postLink(scope, element, attrs, ngModel) {
            $(element).datepicker({
                onSelect: function(dateText) {
                    scope.dates.date = dateText;
                    scope.$apply();
                }
            });
        }
    };
});
