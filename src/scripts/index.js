/**
 * Created by dyb on 14-1-5.
 */
require.config({
    paths: {
        angular: 'vendor/angular.min',
        angularLocale: 'vendor/angular-locale_zh-cn',
        angularAnimate: 'vendor/angular-animate.min',
        icheck: 'vendor/icheck.min',
        jqcloud: 'vendor/jqcloud-1.0.4',
        jquery: 'vendor/jquery-1.10.2.min',
        jqueryUI: 'vendor/jquery-ui-1.10.3.custom.min',
        angularUI: 'vendor/ui-bootstrap-custom-tpls-0.9.0.min',
        lesscss: 'vendor/less-1.6.0.min'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularLocale: {
            deps: ['angular'],
            exports: 'angularLocale'
        },
        angularAnimate: {
            deps: ['angular'],
            exports: 'angularAnimate'
        },
        angularUI: {
            deps: ['angular'],
            exports: 'angularUI'
        },
        icheck: {
            deps: ['jquery']
        },
        jqcloud: {
            deps: ['jquery']
        },
        jqueryUI: {
            deps: ['jquery']
        }
    }
});

require([
    'app',
    'angular',
    'jquery',
    'lesscss',
    'controllers/indexCtrl'
], function (app, angular, $) {

    angular.bootstrap($("body"), ['app']);
});