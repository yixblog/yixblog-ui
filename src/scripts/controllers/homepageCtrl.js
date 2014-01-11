/**
 * Created by Yixian on 14-1-12.
 */
define(['./controllers', '../directives/angular.jqCloud'], function (app) {
    app.controller('homepageCtrl', function ($scope, $log) {
        $scope.initCloudData = function () {
            $log.info('hello');
            $scope.hotTags = [
                {text: 'ajax', weight: 80, link: '#'},
                {text: 'angular', weight: 14, link: '#'},
                {text: 'google', weight: 100, link: '#'},
                {text: 'jquery', weight: 22, link: '#'},
                {text: 'lucene', weight: 10, link: '#'}
            ];
            $log.debug('hot tags inited');
            $log.debug($scope.hotTags);
        }
    })
});