(function() {
    'use strict';

    angular
        .module('httpscall')
        .controller('callHttpsServerController', ['$scope', '$state', 'httpsService',
            function($scope, $state, httpsService) {
                $scope.message = 'empty';

                $scope.getMessage = function () {

                  httpsService.callServer().then(
                      function successCallback(response) {
                        console.log('success: ' + response.status);
                        console.log(response.data);
                        $scope.message = response.data;
                      },
                      function errorCallback(response) {
                        console.log('fail: ' + response.status);
                        return $state.go('error', {error: {"message":response.data, "nextState":'callHttpsApi'}});
                      }

                  )};
            }
        ]);
})();
