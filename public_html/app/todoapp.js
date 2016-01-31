// Markku Laakso, 2016

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

$(document).ready(function () {
    $(".row-eq-height").each(function () {
        var heights = $(this).find(".col-eq-height").map(function () {
            return $(this).outerHeight();
        }).get(), maxHeight = Math.max.apply(null, heights);

        $(this).find(".col-eq-height").outerHeight(maxHeight);
    });
});



