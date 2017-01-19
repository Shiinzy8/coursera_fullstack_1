(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunchItems = "";
        $scope.countItems = function () {

            var lunchItemsSplit = $scope.lunchItems.split(',');
            var countRealItems = 0;

            for (var i = 0; i < lunchItemsSplit.length; i++) {
                if (lunchItemsSplit[i].trim() != "") {
                    countRealItems++
                };
            }

            if (countRealItems != 0) {
                $scope.color = "green";
                if (countRealItems > 3) {
                    $scope.sayMessage = "Too much!";
                } else {
                    $scope.sayMessage = "Enjoy!";
                }
            } else {
                $scope.color = "red";
                $scope.sayMessage = "Please enter data first";
            }

        };
    }
})()