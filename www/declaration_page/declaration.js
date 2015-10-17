angular.module('PCC.declaration', [])

.controller('PCC.declarationCtrl',function($scope,$stateParams,$ionicHistory,urlHelper,ajaxRequest){
    $scope.showdata=false;
      console.log($stateParams);
       $scope.bl_number=$stateParams.bl_number;
    $scope.mv=$stateParams.MV;
    var self=this; 
     self.reportList=function(){
       var url='json/declaration.json';
           
            var promise = ajaxRequest.send(url);
            promise.then(function (data) {
               console.log(data);
              $scope.data=data;
      
           
        
         });  
    };
    self.reportList();
     $scope.goback=function(){
           $ionicHistory.goBack();
    };
});

