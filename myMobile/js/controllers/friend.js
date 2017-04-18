define(['app'],function (app) {
    app.controller('friendCtrl', ['$scope','$ionicPopup',function($scope,$ionicPopup) {
        var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
        $scope.$on('$ionicView.afterEnter', function() {
            if (pages.indexOf(location.hash) > -1) {
                var tabs =document.getElementsByTagName('ion-tabs');
                angular.element(tabs).removeClass("tabs-item-hide");
            }
        });

        var type = ['friend', 'group', 'focus'];
        $scope.type = type[0];
        $scope.changeType = function(num) {
            $scope.type = type[num];
        };

      $scope.leaveHere=function(){
        // $ionicHistory.goBack();
        // Storage.set("DM_Auth", "");
        setTimeout(function(){
          location.href = "#/index";
        }, 100);
      }

      $scope.dot=function(){
        var alertPopup = $ionicPopup.alert({
          template: '还没想好,请期待~~',
          okText: '确定'
        });
      }
    }]);
});

