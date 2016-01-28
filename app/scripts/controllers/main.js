'use strict';

/**
 * @ngdoc function
 * @name twitterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterApp
 */
angular.module('twitterApp')
  .controller('MainCtrl', function ($scope) {
      $scope.hour = "08";
      $scope.minute = "00";
      $scope.apmpm = "PM";
      $scope.range = function(num) {
          var arr = [];
          for(var i = 0; i < num; i++) {
              i > 9 ? arr[i] = i.toString() : arr[i] = "0" + i;
          }
          return arr;
      };
      $scope.setReminder = function() {
        console.log($scope.hour);
        console.log($scope.number);
      };
  });
