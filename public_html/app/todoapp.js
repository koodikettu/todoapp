var ToDoApp = angular.module('ToDoApp', ['ngRoute']);

ToDoApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'app/views/home.html',
                    controller: 'ToDoController'

                }).

                otherwise({
                    redirectTo: '/'
                });
    }]);



