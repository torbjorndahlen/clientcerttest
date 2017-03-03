(function(){
'use strict';

angular
    .module('httpcall', ['ui.router'])
    .service('httpService', ['$http', 'HTTP_API_URL_BASE', function($http, HTTP_API_URL_BASE) {

    var apiUrl = HTTP_API_URL_BASE;

    var service = {};

    service.callServer = function () {

        return $http.get(apiUrl);
    };

    return service;
    }]);
})();
