'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('Person', ['$resource',
        function ($resource) {
            return $resource('http://192.168.1.97:3000/persons/:personId', {});
        }])