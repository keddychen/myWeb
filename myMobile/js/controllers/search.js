define(['app'],function (app) {
    app.controller('searchCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.tag = "";

        $scope.delete = function () {
            $scope.tag = "";
        }

        $scope.leaveHere=function(){
          // $ionicHistory.goBack();
          // Storage.set("DM_Auth", "");
          setTimeout(function(){
            location.href = "#/index";
          }, 100);
        }
    }]);
});

