
define(['app'],function (app) {
    app.controller('groupmsgCtrl', ['$scope','$ionicPopup', function($scope, $ionicPopup) {

        // Triggered on a button click, or some other target
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

        //点击图片变大
        // var img = document.getElementById("img");
        // var onOff=true;
        // var imgH = img.height;
        // // var imgW = img.width;
        $scope.magnify=function(){
          // if(onOff==true){
          //   img.height = imgH*2;
          //   // img.width = imgW*1;
          //   onOff=false;
          // }else{
          //   img.height = imgH;
          //   // img.width = imgW/2;
          //   onOff=true;
          // }

          //弹我喜欢
          var alertPopup = $ionicPopup.alert({
            title: '喜欢我就点赞~~~',
          });
          // alertPopup.then(function(res) {
          //   // console.log('Thank you for not eating my delicious ice cream cone');
          // });

        }

    }]);
});
