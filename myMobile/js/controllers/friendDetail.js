define(['app'],function (app) {
    app.controller('friendDetailCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {
      $scope.addcomment = function() {
        $scope.data = {}
        var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.comment">',
          title: '添加评论',
          scope: $scope,
          buttons: [
            { text: '取消' },
            {
              text: '<b>保存</b>',
              type: 'button-positive',
              onTap: function(e) {
                return $scope.data.comment;
              }
            }
          ]
        });
        myPopup.then(function(res) {
          console.log('发表评论:', res);
          var inp = document.getElementById("listTalk");
          var talk=document.getElementById("talk");
          // talk.
          // var div = document.createElement("div");
          // div.style.cssText = "width:100px;height:100px;border:1px solid red;";
          // inp.parentNode.insertBefore(div,inp.nextSibling)
        });
      };

    }]);

});
