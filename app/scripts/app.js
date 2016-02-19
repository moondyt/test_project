(function (angular) {
    angular.module('App', []).controller('ListCtrl', ['$scope', function ($scope) {
            $scope.todoItems = [{
                    content: 'ȥҽԺ����',
                    done: false
                }, {
                    content: '��ĩ���·�',
                    done: false
                }, {
                    content: '��ɹ����ձ�',
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