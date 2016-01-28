'use strict';

/**
 * @ngdoc service
 * @name twitterApp.textService
 * @description
 * # textService
 * Service in the twitterApp.
 */
angular.module('twitterApp')
  .service('textService', function ($http) {
    var text = function(data) {
        $http.post('http://textbelt.com/text', data).then(success, error);

        function success(response) {
            console.log(response);
        }
        function error(response) {
            console.log(response);
        }
    }
    return {
        text: text 
    }
  });
