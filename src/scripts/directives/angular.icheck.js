/**
 * Created by yixian on 14-1-3.
 */
define(['./directives', 'icheck'], function (app) {
    app.directive('icheck', function ($log, $parse) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var ngModelGetter = $parse(attrs['ngModel']);
                var value = $parse(attrs['ngValue'])(scope);
                if (attrs.type === 'radio' || attrs.type === 'checkbox') {
                    //bind iCheck
                    element.iCheck({
                        checkboxClass: 'icheckbox_square-red',
                        radioClass: 'iradio_square-red',
                        increaseArea: '20%'
                    });
                    //init iCheck status
                    if (attrs.type == 'checkbox' && attrs['ngModel']) {
                        var checked = ngModelGetter(scope);
                        $log.debug('checkbox checked:' + checked);
                        element.iCheck(checked ? 'check' : "uncheck")
                    } else if (attrs.type == 'radio' && attrs['ngModel']) {
                        $log.debug('radio checked:' + ngModelGetter(scope));
                        element.iCheck(ngModelGetter(scope) == value ? 'check' : 'uncheck')
                    }
                    //bind change event
                    element.on('ifChanged', function (event) {
                        if (attrs.type === 'checkbox' && attrs['ngModel']) {
                            scope.$apply(function () {
                                return ngModelGetter.assign(scope, event.target.checked);
                            })
                        } else if (attrs.type === 'radio' && attrs['ngModel']) {
                            scope.$apply(function () {
                                return ngModelGetter.assign(scope, value);
                            })
                        }
                    });
                }
            }
        }
    })
});