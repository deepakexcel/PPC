angular.module('PCC.fact', [])


.controller('PCC.factCtrl', function($scope,$rootScope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
    $rootScope.showdata=false;
      $scope.goback=function(){
        
           $ionicHistory.goBack();
    };
    $scope.submit=function(){
        urlHelper.openFact_page2();
    };
    var self=this;
    self.reportList=function(){
       var url='json/fact_screen.json';
           
            var promise = ajaxRequest.send(url);
            promise.then(function (data) {
               console.log(data);
            $scope.data=data;
            
         });  
    };
    self.reportList();
    
});


