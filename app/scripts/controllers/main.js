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

    $scope.dates = {};
    $scope.dates.date = todayMonth + "/" + todayDay + "/" + todayYear;

    $scope.reminders = schedule.reminders;

    $scope.range = function(num) {
        var arr = [];
        for(var i = 0; i < num; i++) {
            i > 9 ? arr[i] = i.toString() : arr[i] = "0" + i;
        }
        return arr;
    };


    $scope.setReminder = function() {
        schedule.addReminder($scope.dates, $scope.number, $scope.message);
        $scope.message = "";
    };

    $scope.removeReminder = function(reminder) {
        schedule.removeReminder(reminder);
    };
});
