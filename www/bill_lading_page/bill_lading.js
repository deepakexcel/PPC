
angular.module('PCC.bill', [])


.controller('PCC.BillCtrl', function($scope,$rootScope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
    $rootScope.show1=false;
    $rootScope.show=false;
    $rootScope.showdata=false;
        console.log($stateParams);
    $scope.manifest_no=$stateParams.manifest_no;
    $scope.mv=$stateParams.MV;
     console.log($scope.manifest_no);
      var self=this;
self.reportList=function(no){
       var url='json/bill_lading.json';
           var data=no;
            var promise = ajaxRequest.send(url,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data=data;
            
         });  
    };
    self.reportList($scope.manifest_no);

    $scope.goback=function(){
           $ionicHistory.goBack();
    };
    $scope.move=function(bl_number){
        console.log(bl_number);
       var data={bl_number:bl_number,MV:$scope.mv};
       urlHelper.openMeasurement(data);
        
    };
});