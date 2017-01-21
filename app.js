(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunchItems = "";
 
        $scope.countItems = function (){
            var items = countDishes ( $scope.lunchItems);
            $scope.sayMessage = changeMessage (items);
            $scope.color = (items != 0) ? "green" : "red";
        };
        
        $scope.deleteMessage = function() {
            $scope.sayMessage = "";
            $scope.lunchItems = "";
        };
        
        function countDishes (str) {
            var splitStr = str.split(',');
            var count = 0;
            var strLenght = splitStr.length;
            for (var i = 0; i < strLenght; i++) {
                if (splitStr[i].trim() != "") {
                    count++;
                }
            }
            return count;
        }
        
        function changeMessage(data) {
            var message = "";
            if (data != 0) {
                if (data > 3) {
                    message = "Too much!";
                } else {
                    message = "Enjoy!";
                }
            } else {
                message = "Please enter data first";
            }
            return message;
        } 
    }
})()