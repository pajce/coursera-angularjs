(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

$scope.dishesStr = "";

$scope.checkIfTooMuch = function (){
 $scope.dishesArray = $scope.dishesStr.split(",");
 $scope.arrayLength = $scope.dishesArray.length;
 $scope.message="";
 if($scope.dishesArray.length == 0 || $scope.dishesStr == "")
  $scope.message="Insert your dishes, please";
 else if ($scope.dishesArray.length >= 1 && $scope.dishesArray.length <= 3)
  $scope.message="Enjoy!"  ;
 else
  $scope.message="It is too much!";
 return $scope.message;
};
}
})();
