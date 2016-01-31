'use strict';

/**
 * @ngdoc function
 * @name textminder.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterApp
 */
angular.module('textminder')
.controller('MainCtrl', function ($scope, schedule) {

    $scope.dates = {};
    $scope.newReminder = { when : $scope.dates};
    $scope.reminders = schedule.reminders;

    $scope.range = function(num) {
        var arr = [];
        for(var i = 0; i < num; i++) {
            i > 9 ? arr[i] = i.toString() : arr[i] = "0" + i;
        }
        return arr;
    };

    $scope.addReminder = function(reminder) {
        schedule.addReminder(reminder);
        $scope.message = "";
    };

    $scope.removeReminder = function(reminder) {
        schedule.removeReminder(reminder);
    };
});
