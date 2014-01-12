/**
 * Created by Yixian on 14-1-12.
 */
define(['./controllers', '../directives/angular.jqCloud'], function (app) {
    app.controller('homepageCtrl', function ($scope, $log) {
        $scope.hotTags = [
            {text: 'ajax', weight: 80, link: '#'},
            {text: 'angular', weight: 14, link: '#'},
            {text: 'google', weight: 100, link: '#'},
            {text: 'jquery', weight: 22, link: '#'},
            {text: 'lucene', weight: 10, link: '#'}
        ];

        $scope.newArticles = {
            "articles": [
                {
                    "addTime": 1380030882858,
                    "addtimestring": "2013-09-24 21:54:42",
                    "author": {
                        "articleCount": 2,
                        "banFlag": false,
                        "id": 1,
                        "lastlogin": 1388760297679,
                        "lastloginstring": "2014-01-03 22:44:57",
                        "nick": "tester1",
                        "regtime": 1377620025491,
                        "regtimestring": "2013-08-28 00:13:45",
                        "sex": "男",
                        "uid": "testuser1"
                    },
                    "editTime": 1380034050490,
                    "edittimestring": "2013-09-24 22:47:30",
                    "id": 2,
                    "replycount": 0,
                    "tagString": "article, code, 测试",
                    "tags": ["article", "code", "测试"],
                    "title": "文章测试",
                    "topFlag": false
                },
                {
                    "addTime": 1378580010846,
                    "addtimestring": "2013-09-08 02:53:30",
                    "author": {
                        "articleCount": 2,
                        "banFlag": false,
                        "id": 1,
                        "lastlogin": 1388760297679,
                        "lastloginstring": "2014-01-03 22:44:57",
                        "nick": "tester1",
                        "regtime": 1377620025491,
                        "regtimestring": "2013-08-28 00:13:45",
                        "sex": "男",
                        "uid": "testuser1"
                    },
                    "editTime": 0,
                    "edittimestring": "1970-01-01 08:00:00",
                    "id": 1,
                    "replycount": 1,
                    "tagString": "article, 测试",
                    "tags": ["article", "测试"],
                    "title": "测试文章",
                    "topFlag": false
                }
            ],
            "page": 1,
            "pagesize": 10,
            "success": true,
            "totalcount": 2,
            "totalpage": 1
        };

        $scope.hotArticles = {
            "articles": [
                {
                    "addTime": 1378580010846,
                    "addtimestring": "2013-09-08 02:53:30",
                    "author": {
                        "articleCount": 2,
                        "banFlag": false,
                        "id": 1,
                        "lastlogin": 1388760297679,
                        "lastloginstring": "2014-01-03 22:44:57",
                        "nick": "tester1",
                        "regtime": 1377620025491,
                        "regtimestring": "2013-08-28 00:13:45",
                        "sex": "男",
                        "uid": "testuser1"
                    },
                    "editTime": 0,
                    "edittimestring": "1970-01-01 08:00:00",
                    "id": 1,
                    "replycount": 1,
                    "tagString": "article, 测试",
                    "tags": ["article", "测试"],
                    "title": "测试文章",
                    "topFlag": false
                },
                {
                    "addTime": 1380030882858,
                    "addtimestring": "2013-09-24 21:54:42",
                    "author": {
                        "articleCount": 2,
                        "banFlag": false,
                        "id": 1,
                        "lastlogin": 1388760297679,
                        "lastloginstring": "2014-01-03 22:44:57",
                        "nick": "tester1",
                        "regtime": 1377620025491,
                        "regtimestring": "2013-08-28 00:13:45",
                        "sex": "男",
                        "uid": "testuser1"
                    },
                    "editTime": 1380034050490,
                    "edittimestring": "2013-09-24 22:47:30",
                    "id": 2,
                    "replycount": 0,
                    "tagString": "article, code, 测试",
                    "tags": ["article", "code", "测试"],
                    "title": "文章测试",
                    "topFlag": false
                }
            ],
            "page": 1,
            "pagesize": 10,
            "success": true,
            "totalcount": 2,
            "totalpage": 1
        }
    })
});