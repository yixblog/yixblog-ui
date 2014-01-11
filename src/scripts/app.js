/**
 * Created by dyb on 14-1-5.
 */
define(['angular','angularAnimate','angularLocale','angularUI','angularRoute','directives/directives','controllers/controllers'],function(angular){
    var app = angular.module('app',['ngAnimate','ui.bootstrap','ngRoute','directives','controllers'],null);
    app.config(function($routeProvider,$locationProvider){
        $routeProvider.otherwise({
            templateUrl:'src/views/homepage.html',
            controller:'homepageCtrl'
        });
        $locationProvider.html5Mode(true)
    });
    return app;
});