(function(){
'use strict';

angular
    .module('httpscall', ['ui.router'])
    .service('httpsService', ['$http', 'HTTPS_API_URL_BASE', function($http, HTTPS_API_URL_BASE) {

    var apiUrl = HTTPS_API_URL_BASE;

    var service = {};

    service.callServer = function () {

      var req = {
          url: apiUrl,
          port: 4433,
          path: '/api/',
          method: 'GET',
          key: fs.readFileSync('cert/client1-key.pem'),
          cert: fs.readFileSync('cert/client1-crt.pem'),
          ca: fs.readFileSync('cert/ca-crt.pem') };

        return $http.get(req);
    };

    return service;
    }]);
})();
