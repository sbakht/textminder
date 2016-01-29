'use strict';

/**
 * @ngdoc service
 * @name textminder.textService
 * @description
 * # textService
 * Service in the textminder.
 */
angular.module('textminder')
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
