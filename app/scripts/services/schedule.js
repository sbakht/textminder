'use strict';

/**
 * @ngdoc service
 * @name textminder.schedule
 * @description
 * # schedule
 * Factory in the textminder.
 */
angular.module('textminder')
  .factory('schedule', function () {

    function to24Hour(obj) {
        if(obj.ampm == "AM") {
            return parseInt(obj.hour); 
        }
        if(obj.hour != 12) {
            return 12 + parseInt(obj.hour);
        }
        return 0;
    }

    var createSchedule = function(obj) {
        var date = new Date(obj.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = to24Hour(obj);
        var minute = parseInt(obj.minute);
        later.date.localTime();
        return later.parse.recur().on(year).year().on(month).month().on(day).dayOfMonth().on(hour).hour().on(minute).minute();
    }

    return {
      createSchedule: createSchedule
    };
  });
