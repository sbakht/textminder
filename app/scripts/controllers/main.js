'use strict';

/**
 * @ngdoc function
 * @name twitterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterApp
 */
angular.module('twitterApp')
  .controller('MainCtrl', function ($scope, textService) {
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
          var date = new Date($scope.date);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hour = to24Hour($scope.hour);
          var minute = parseInt($scope.minute);
          later.date.localTime();
          return later.parse.recur().on(year).year().on(month).month().on(day).dayOfMonth().on(hour).hour().on(minute).minute();
      }

      function isFutureDate(date) {
        return date - new Date() > 0;
      }

      function createDate() {
          var date = new Date($scope.date);
          date.setHours(to24Hour($scope.hour));
          date.setMinutes($scope.minute);
          return date;
      }

      $scope.setReminder = function() {
          var date = createDate();
          if(isFutureDate(date)) {
              var data = {number: $scope.number, message: $scope.message}
              var sched = createSchedule();
              later.setTimeout(text, sched);
          }
          function text() {
            textService.text(data);
          }

      };
  });
