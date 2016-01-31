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

            defaultTodaysDate();

            function defaultTodaysDate() {
                var today = new Date();
                var todayMonth = today.getMonth() + 1;
                var todayDay = today.getDate();
                var todayYear = today.getFullYear();
                if(todayMonth < 10) {
                    todayMonth = "0" + todayMonth;
                }
                if(todayDay < 10) {
                    todayDay = "0" + todayDay;
                }

                scope.dates.date = todayMonth + "/" + todayDay + "/" + todayYear;
            }
        }
    };
});
