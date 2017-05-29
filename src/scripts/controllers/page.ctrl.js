(function (angular) {
    'use strict';

    angular.module('exampleSupermarketWeb')
    .controller('PageController', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.page = $stateParams.pageName;
    }]);
}(angular));
