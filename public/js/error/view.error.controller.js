(function() {
    'use strict';

    angular
        .module('error', ['ui.router'])
        .controller('viewErrorController', ['$scope', '$state',
            function($scope, $state) {
                $scope.error = $state.params.error;

                    $scope.ok = function() {
                        $state.go($scope.error.nextState);
                    };


            }
        ]);
})();
