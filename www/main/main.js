angular.module('PCC.main', [])


.controller('PCC.mainCtrl', function($scope,$ionicHistory,ajaxRequest,$stateParams,urlHelper,$ionicHistory,timeStorage) {
//   var x=$ionicHistory.currentStateName();
//    console.log(x);
//    if(x=='main.Report'){
//        $scope.show=true;
//    }
//    else{
//        $scope.show=false;
//    }
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
        if(i===0){
            $scope.classname='active';
            i++;
        }
        else{
             $scope.classname='';
             i=0;
        }
    };
    var isAndroid = ionic.Platform.isAndroid();
    console.log(isAndroid);
    if(isAndroid){
   cordova.getAppVersion.getVersionNumber(function (version) {
   $scope.version=version;
    });
    }
    if(timeStorage.get('login')){
        $scope.username=timeStorage.get('login');
        console.log($scope.username);
    }
    $scope.logout=function(){
      timeStorage.remove('login');
      urlHelper.openlogin();
    };
    var timeInMs = Date.now();
    console.log(timeInMs);
});