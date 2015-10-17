angular.module('PCC.measurement', [])


.controller('PCC.measureCtrl', function($scope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
    $scope.showdata=false;
    console.log($stateParams);
    $scope.bl_number=$stateParams.bl_number;
    $scope.mv=$stateParams.MV;
    var self=this;
   self.reportList=function(no){
       var url='json/measure_activity.json';
       var url1='json/measure_billlading.json';
       var url2='json/measure_cargoclass.json';
       var url3='json/measure_consignee.json';
       var url4='json/measure_portlading.json';
           var data=no;
            var promise = ajaxRequest.send(url,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data=data;
         });
         var promise = ajaxRequest.send(url1,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data1=data;
         });  
         var promise = ajaxRequest.send(url2,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data2=data;
         });  
         var promise = ajaxRequest.send(url3,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data3=data;
         });  
         var promise = ajaxRequest.send(url4,data);
            promise.then(function (data) {
               console.log(data);
            $scope.data4=data;
         });  
    };
    self.reportList($scope.bl_number);
    

     $scope.goback=function(){
        
           $ionicHistory.goBack();
    };
    $scope.user={
        
            cbm:'',
            length:'',
            weight:'',
            height:'',
            width:'',
            tonne:''
    };
    $scope.expression=true;
 $scope.$watch('user.length * user.height*user.width', function (value) {
        $scope.user.cbm = value;
    });

 
      $scope.$watch('user.weight', function (value) {
          {
              console.log($scope.user.cbm);
              console.log(value);
              if(!value){
                  $scope.user.tonne='0';
              }
              else if($scope.user.cbm > value){
                   
                   $scope.user.tonne=$scope.user.cbm;
              }
              else{
                   $scope.user.tonne=value;
              }
          }
         
      });
 
 $scope.move=function(){
       
       var data={bl_number:$scope.bl_number,MV:$scope.mv};
       urlHelper.openDeclaration(data);
        
    };
    
});