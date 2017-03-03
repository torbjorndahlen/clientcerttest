(function(){
'use strict';

angular
    .module('util', [])
    .constant('HTTPS_API_URL_BASE', "https://localhost:4433/api/");
    .constant('HTTP_API_URL_BASE', "http://localhost:8866/api/");
    //.constant('HTTPS_API_URL_BASE', "https://192.168.1.96:4433/api/");
    //.constant('HTTP_API_URL_BASE', "http://192.168.1.96:8866/api/");
})();
