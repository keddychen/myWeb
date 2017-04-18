define(['app'],function (app) {
    app.controller('groupDetailCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
        // Triggered on a button click, or some other target
      var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
      $scope.$on('$ionicView.afterEnter', function() {
        if (pages.indexOf(location.hash) > -1) {
          var tabs =document.getElementsByTagName('ion-tabs');
          angular.element(tabs).removeClass("tabs-item-hide");
        }
      });

        $scope.type = "post";

        var type = ["post", "act"];
        $scope.changeType = function (a) {
            $scope.type = type[a];
        }

        $scope.backIndex=function(){
          setTimeout(function(){
            location.href = "#/tab/home";
          }, 100);
          return;
        }

      $scope.goAlert = function() {
        var alertPopup = $ionicPopup.alert({
          template: '还没想好,请期待~~',
          okText: '确定'
        });
      };
    }]);

});
