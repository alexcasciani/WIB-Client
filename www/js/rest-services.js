'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('Person', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/persons/:personId', {});
        }])