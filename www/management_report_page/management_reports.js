angular.module('PCC.report', ['chart.js'])

.controller('PCC.reporstCtrl',function($scope,$rootScope,$stateParams,$ionicHistory,urlHelper,ajaxRequest){
    var self=this;
    $rootScope.showdata=false;
     $scope.goback=function(){
           $ionicHistory.goBack();
    };
   $scope.labels = ['21 FEB 2015', '22 FEB 2015', '23 FEB 2015', '24 FEB 2015',
       '25 FEB 2015', '26 FEB 2015'];
  $scope.series = ['Series A'];

  $scope.data = [
    [211,200,134,196, 200,34]
   
  ];
  $scope.x=10;
   $scope.labels1 = ["ROB", "Discharged"];
  $scope.data1 = [27,73];
  self.reportList=function(){
       var url='json/management_page_table.json';
          
            var promise = ajaxRequest.send(url);
            promise.then(function (data) {
               console.log(data);
            $scope.data=data;
            
         });  
    };
    self.reportList($scope.manifest_no);
});



