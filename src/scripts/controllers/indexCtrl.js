/**
 * Created by dyb on 14-1-6.
 */
define(['app', 'directives/angular.icheck', 'directives/angular.jqCloud'], function (app) {
    app.controller('indexCtrl', function ($scope, $http,$log) {
        $scope.initCloudData = function () {
            console.log('hello')
            $scope.hotTags = [
                {text: 'ajax', weight: 80, link: '#'},
                {text: 'angular', weight: 14, link: '#'},
                {text: 'google', weight: 100, link: '#'},
                {text: 'jquery', weight: 22, link: '#'},
                {text: 'lucene', weight: 10, link: '#'}
            ]
            $log.debug('hot tags inited')
            $log.debug($scope.hotTags);
        }
    });
})