define(['app'],function (app) {
    app.controller('homeCtrl', ['$scope',function($scope) {
        var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
        $scope.$on('$ionicView.afterEnter', function() {
            if (pages.indexOf(location.hash) > -1) {
                var tabs =document.getElementsByTagName('ion-tabs');
                angular.element(tabs).removeClass("tabs-item-hide");
              // angular.element(".badge").hide();
            }
        });

        var varity = ['discovery', 'location'];
        $scope.type = varity[0];
        $scope.changeType = function(num) {
            $scope.type = varity[num];
        };
        var activity = ['activity', 'personal', 'group'];
        $scope.act = activity[0];
        $scope.changeAct = function(num) {
            $scope.act = activity[num];
        };

      //刷新
      $scope.doRefresh = function () {
        // $scope.x +=4;
        $scope.$broadcast('scroll.refreshComplete');
      }

      //点赞
      var odiv = document.getElementById("likeNum");
      var odiv1 = document.getElementById("likeNum1");
      var odiv2 = document.getElementById("likeNum2");
      var obad1=document.getElementById("badNum1");
      var obad2=document.getElementById("badNum2");
      var obad3=document.getElementById("badNum3");
      var count = 0;
      var count1 = 0;
      var count2 = 0;
      var badCount1=0;
      var badCount2=0;
      var badCount3=0;
      $scope.likeBox=function () {
        count = count + 1;
        odiv.innerHTML = count;
      }
      $scope.likeBox1=function () {
        count1 = count1 + 1;
        odiv1.innerHTML=count1;
      }
      $scope.likeBox2=function () {
        count2 = count2 + 1;
        odiv2.innerHTML=count2;
      }
      $scope.badBox1=function(){
        badCount1=badCount1+1;
        obad1.innerHTML=badCount1;
      }
      $scope.badBox2=function(){
        badCount2=badCount2+1;
        obad2.innerHTML=badCount2;
      }
      $scope.badBox3=function(){
        badCount3=badCount3+1;
        obad3.innerHTML=badCount3;
      }

      //评论
      $scope.comment1=function () {
        document.getElementById('badge1').style.display = "none";
      }
      $scope.comment2=function () {
        document.getElementById('badge2').style.display = "none";
      }
      $scope.comment3=function () {
        document.getElementById('badge3').style.display = "none";
      }
      // $scope.badge=true;
      // $scope.badges = {
      //   carts:8
      // };
      // $(".badge").remove();

      //退出
      $scope.leaveHere=function(){
        setTimeout(function(){
          location.href = "#/index";
        }, 100);
      }

    }]);
});

