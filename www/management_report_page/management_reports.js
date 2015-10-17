angular.module('PCC.report', [])

.controller('PCC.reporstCtrl',function($scope,$stateParams,$ionicHistory,urlHelper,ajaxRequest){
     $scope.goback=function(){
           $ionicHistory.goBack();
    };
    
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
});



