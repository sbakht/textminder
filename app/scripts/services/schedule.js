'use strict';

/**
 * @ngdoc service
 * @name textminder.schedule
 * @description
 * # schedule
 * Factory in the textminder.
 */
angular.module('textminder')
  .factory('schedule', function (textService) {

    var reminders = [];

    function to24Hour(obj) {
        if(obj.ampm == "AM") {
            return parseInt(obj.hour); 
        }
        if(obj.hour != 12) {
            return 12 + parseInt(obj.hour);
        }
        return 0;
    }

    function createSchedule(obj) {
        var date = new Date(obj.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = to24Hour(obj);
        var minute = parseInt(obj.minute);
        later.date.localTime();
        return later.parse.recur().on(year).year().on(month).month().on(day).dayOfMonth().on(hour).hour().on(minute).minute();
    }

    var addReminder = function(obj) {
        var when = obj.when;
        var sched = createSchedule(when);
        console.log(later.schedule(sched).next(2));

        var timer = later.setTimeout(text, sched);
        reminders.push({
            date: when.date,
            hour: when.hour,
            minute: when.minute,
            ampm: when.ampm,
            number: obj.number,
            message: obj.message,
            timer: timer
        });

        function text() {
            var data = {number: obj.number, message: obj.message}
            textService.text(data);
        }

    }

    var removeReminder = function(reminder) {
        var index = reminders.indexOf(reminder);
        reminders[index].timer.clear();
        if(index != -1) {
            reminders.splice(index, 1);
        }
    }

    return {
      reminders : reminders,
      addReminder: addReminder,
      removeReminder: removeReminder
    };
  });
