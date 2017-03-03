(function(){
'use strict';

angular
    .module('httpscall', ['ui.router'])
    .service('httpsService', ['$http', 'HTTPS_API_URL_BASE', function($http, HTTPS_API_URL_BASE) {

    var apiUrl = HTTPS_API_URL_BASE;

    var service = {};

    service.callServer = function () {

        return $http.get(apiUrl);
    };

    return service;
    }]);
})();
