/**
 * Created by dyb on 14-1-5.
 */
define(['./directives', 'jqcloud'], function (app) {
    app.directive('jqcloud', function ($parse, $log) {
        return {
            restrict: "E",
            template:'<div class="jqcloud"></div> ',
            replace: true,
            link: function (scope, element, attrs) {
                var modalGetter = $parse(attrs.ngModel);
                $log.debug(attrs.ngModel);
                scope.$watch(attrs.ngModel, function () {
                    var values = modalGetter(scope);
                    $log.debug(values);
                    if (values != null) {
                        element.jQCloud(modalGetter(scope), {width: attrs.width, height: attrs.height});
                    }
                })
            }
        }
    })
});