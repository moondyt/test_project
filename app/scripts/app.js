(function (angular) {
    angular.module('App', []).controller('ListCtrl', ['$scope', function ($scope) {
            $scope.todoItems = [{
                    content: '去医院看牙',
                    done: false
                }, {
                    content: '周末买衣服',
                    done: false
                }, {
                    content: '完成工作日报',
                    done: true
                }];

            $scope.addItem = function () {
                $scope.todoItems.push({
                    content: $scope.content,
                    done: false
                });
                $scope.content = "";
            };
            $scope.removeItem = function(item) {
                var idx = $scope.todoItems.indexOf(item);
                $scope.todoItems.splice(idx, 1);
            };
        }]);
})(angular);