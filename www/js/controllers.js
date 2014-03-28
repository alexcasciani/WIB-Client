'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('PersonListCtrl', ['$scope', 'Person', function ($scope, Person) {
        $scope.persons = Person.query();
    }])
    .controller('PersonDetailCtrl', ['$scope', '$routeParams', 'Person', function ($scope, $routeParams, Person) {
        $scope.person = Person.get({personId: $routeParams.personId});
    }]);
