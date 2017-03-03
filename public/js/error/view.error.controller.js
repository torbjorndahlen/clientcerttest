(function() {
    'use strict';

    angular
        .module('error', ['ui.router','ngStorage'])
        .controller('viewErrorController', ['$scope', '$state', '$sessionStorage',
            function($scope, $state, $sessionStorage) {
                $scope.error = $state.params.error;

                    $scope.ok = function() {
                        $state.go($scope.error.nextState);
                    };


            }
        ]);
})();
