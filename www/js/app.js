'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.restServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/persons', {templateUrl: 'partials/person-list.html', controller: 'PersonListCtrl'});
    $routeProvider.when('/persons/:personId', {templateUrl: 'partials/person-detail.html', controller: 'PersonDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/persons'});
}]);