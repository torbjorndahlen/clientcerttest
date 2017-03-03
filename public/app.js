(function(){
  'use strict';
var myapp = angular.module('myapp', [
  'ui.router',
  'httpscall',
  'httpcall',
  'util',
  'error'
]);
myapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/callHttpServer");

   $stateProvider
     .state('callHttpsServer', {
       url: "/callHttpsServer",
       templateUrl: "js/httpscall/call-https-server.html",
       controller: "callHttpsServerController"
     })
     .state('callHttpServer', {
       url: "/callHttpServer",
       templateUrl: "js/httpcall/call-http-server.html",
       controller: "callHttpServerController"
     })
     .state('error', {
       url: "/error",
       templateUrl: "js/error/view-error.html",
       controller: "viewErrorController",
       params: {error: null}
     });
   });

})();
