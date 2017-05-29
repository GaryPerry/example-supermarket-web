(function (angular) {
    'use strict';

    angular.module('exampleSupermarketWeb', [
        'ui.router'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
            .otherwise('/');

            $stateProvider
            .state("home", {
                url: "/",
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })
            .state("docs", {
                url: "/docs",
                controller: 'DocsController',
                templateUrl: 'views/docs.html'
            })
            .state("about", {
                url: "/about/",
                controller: 'AboutController',
                templateUrl: 'views/about.html'
            })
            .state("page", {
                url: "/page/{pageName}",
                controller: 'PageController',
                templateUrl: 'views/page.html'
            });
        }
    ]);
}(angular));
