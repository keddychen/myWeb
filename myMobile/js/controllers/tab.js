define(['app'],function (app) {
    app.controller('tabCtrl', ['$scope', function($scope) {
      $scope.myWeb=function () {
        location.href = "#/tab/message";
        return;
      }
      $scope.myResume=function () {
        location.href = "#/tab/friend";
        return;
      }
      $scope.myIndex=function () {
        location.href = "#/tab/home";
        return;
      }
    }]);
});

