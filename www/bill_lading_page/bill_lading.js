
angular.module('PCC.bill', [])


.controller('PCC.BillCtrl', function($scope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
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
//    $state.go("bill_lading.Content");
$scope.showdata=false;
  
   $scope.showback=function(){    //material menu show backdrop
       console.log('yes');
       $scope.showdata=true;
   };
   $scope.backdrop=function(){
        $scope.showdata=false;
        console.log('no');
   };
    var i=0;
    $scope.name=function()
    {
        if(i==0){
            $scope.classname='active';
            i++;
        }
        else{
             $scope.classname='';
             i=0;
        }
    };
    $scope.goback=function(){
           $ionicHistory.goBack();
    };
    $scope.move=function(bl_number){
        console.log(bl_number);
       var data={bl_number:bl_number,MV:$scope.mv};
       urlHelper.openMeasurement(data);
        
    };
});