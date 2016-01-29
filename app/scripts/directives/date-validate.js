'use strict';

/**
 * @ngdoc directive
 * @name twitterApp.directive:dateValidate
 * @description
 * # dateValidate
 */
angular.module('twitterApp')
.directive('dateValidate', function () {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function postLink(scope, element, attrs, ngModel) {
            scope.$watchCollection('dates', function(newValue, oldValue) {
                validate();
            });

            function validate(value) {
                var date = createDate();
                var valid = isFutureDate(date);      
                ngModel.$setValidity('date-validate', valid);
                return valid ? value : undefined;
            }

            ngModel.$parsers.unshift(validate);
            ngModel.$formatters.unshift(validate);

            function isFutureDate(date) {
                return date - new Date() > 0;
            }

            function createDate() {
                var date = new Date(scope.dates.date);
                date.setHours(to24Hour(scope.dates.hour));
                date.setMinutes(scope.dates.minute);
                return date;
            }
            function to24Hour(hour) {
                if(scope.dates.ampm == "AM") {
                    return parseInt(hour); 
                }
                if(hour != 12) {
                    return 12 + parseInt(hour);
                }
                return 0;
            }

        }
    };
});
