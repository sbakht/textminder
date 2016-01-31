'use strict';

/**
 * @ngdoc function
 * @name textminder.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterApp
 */
angular.module('textminder')
.controller('MainCtrl', function ($scope, textService, schedule) {

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

    $scope.schedules = [];

    $scope.range = function(num) {
        var arr = [];
        for(var i = 0; i < num; i++) {
            i > 9 ? arr[i] = i.toString() : arr[i] = "0" + i;
        }
        return arr;
    };


    $scope.setReminder = function() {
        var sched = schedule.createSchedule($scope.dates);
        console.log(later.schedule(sched).next(2));

        var timer = later.setTimeout(text, sched);
        $scope.schedules.push({
            date: $scope.dates.date,
            hour: $scope.dates.hour,
            minute: $scope.dates.minute,
            ampm: $scope.dates.ampm,
            number: $scope.number,
            message: $scope.message,
            timer: timer
        });

        $scope.message = "";

        function text() {
            var data = {number: $scope.number, message: $scope.message}
            textService.text(data);
        }
    };

    $scope.deleteReminder = function(schedule) {
        var index = $scope.schedules.indexOf(schedule);
        $scope.schedules[index].timer.clear();
        if(index != -1) {
            $scope.schedules.splice(index, 1);
        }
    };
});
