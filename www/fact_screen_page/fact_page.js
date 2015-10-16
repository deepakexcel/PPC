angular.module('PCC.fact', [])


.controller('PCC.factCtrl', function($scope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
      $scope.goback=function(){
        
           $ionicHistory.goBack();
    };
    
});


