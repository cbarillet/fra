function BreadCrumb(title, link, navbar) {
    "use strict";
    this.title = title;
    this.link = link;
    this.navbar = navbar;
}

var fraApp = angular.module('fraApp', ['ngMessages', 'ngRoute', 'ngResource', 'ui.bootstrap']),
    breadcrumbs = {
        home: new BreadCrumb('Accueil', '#/', 'home'),
        endpoints: new BreadCrumb('Gestion des endpoints', '#/endpoints', 'endpoints')
    };


fraApp.config(function ($routeProvider) {
    "use strict";
    $routeProvider.when('/endpoints', {
        templateUrl: 'views/endpoints.html',
        controller: 'EndpointsCtrl',
        breadcrumb: [breadcrumbs.home, breadcrumbs.endpoints]
    }).otherwise({
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        breadcrumb: [breadcrumbs.home]
    });
}).run(['$rootScope', function ($rootScope) {
    "use strict";
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        var breadcrumb = current.$$route ? current.$$route.breadcrumb : [breadcrumbs.home],
            currentBC = breadcrumb[breadcrumb.length - 1];
        $rootScope.breadcrumb = breadcrumb;
        $rootScope.title = currentBC.title;
        $rootScope.navbar = currentBC.navbar;
    });
}]);