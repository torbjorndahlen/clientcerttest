(function() {
    'use strict';

    angular
        .module('httpcall')
        .controller('callHttpServerController', ['$scope', '$state','httpService',
            function($scope, $state, httpService) {
                $scope.message = 'empty';

                $scope.getMessage = function () {

                  httpService.callServer().then(
                      function successCallback(response) {
                        console.log('success: ' + response.status);
                        console.log(response.data);
                        $scope.message = response.data;
                      },
                      function errorCallback(response) {
                        console.log('fail: ' + response.status);
                        return $state.go('error', {error: {"message":response.data, "nextState":'callHttpApi'}});
                      }

                  )};
            }
        ]);
})();
