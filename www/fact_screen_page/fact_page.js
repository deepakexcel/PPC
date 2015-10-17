angular.module('PCC.fact', [])


.controller('PCC.factCtrl', function($scope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
    $scope.showdata=false;
      $scope.goback=function(){
        
           $ionicHistory.goBack();
    };
    $scope.submit=function(){
        urlHelper.openFact_page2();
    };
    
});


