'use strict';

/**
 * @ngdoc function
 * @name textminder.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterApp
 */
angular.module('textminder')
.controller('MainCtrl', function ($scope, textService) {

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

    function to24Hour(hour) {
        if($scope.ampm == "AM") {
            return parseInt(hour); 
        }
        if(hour != 12) {
            return 12 + parseInt(hour);
        }
        return 0;
    }

    function createSchedule() {
        var date = new Date($scope.dates.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = to24Hour($scope.dates.hour);
        var minute = parseInt($scope.dates.minute);
        later.date.localTime();
        return later.parse.recur().on(year).year().on(month).month().on(day).dayOfMonth().on(hour).hour().on(minute).minute();
    }

    function createDate() {
        var date = new Date($scope.dates.date);
        date.setHours(to24Hour($scope.dates.hour));
        date.setMinutes($scope.dates.minute);
        return date;
    }

    $scope.setReminder = function() {
        var date = createDate();
        var sched = createSchedule();
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
