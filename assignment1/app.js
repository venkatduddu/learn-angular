(function () {
'use strict';

angular.module('checkTooMuchApp', [])

.controller('CheckTooMuchAppController', function ($scope) {
  $scope.message = "";
  $scope.dishText = "";
  $scope.checkIfTooMuch = function () {
    var dishText = $scope.dishText;
    if(dishText.length == 0) {
      $scope.message = "Please enter data first"
    } else {
      var dishArray = dishText.split(",");
      var dishCount = 0;

      for (var idx = 0 ; idx < dishArray.length; idx ++ ) {
        if (dishArray[idx].length != 0) {
          dishCount ++;
        }
      }

      if (dishCount > 3) {
          $scope.message = "Too much!"
      } else {
          $scope.message = "Enjoy!"
      }
    }
  };
});

})();
