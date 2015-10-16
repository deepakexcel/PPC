angular.module('PCC.sidenav', [])


.controller('PCC.sidenav', function($scope,ajaxRequest,$stateParams,urlHelper,$ionicHistory) {
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
    
});

