'use strict';

angular.module('myApp.version.version-directive', [])

    .directive('myDatepicker', function() {
        return function(scope, elem, attrs, ctrl) {
            $(function() {
                // call datepicker on the element
                elem.datepicker({
                    dateFormat: 'mm/dd/yy',
                    onSerlect: function(dateText) {
                        scope.$apply(function() {
                            ctrl.$setViewValue(dateText);
                        });
                    }
                });
            });
        }
    })
.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
