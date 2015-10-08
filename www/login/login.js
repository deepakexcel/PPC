'use strict';

angular.module('PCC.login', [])


.controller('PCC.LoginCtrl', function($scope,ajaxRequest,$state) {
    $scope.user={
        username:'',
        password:''
    };
    $scope.submit=function(){
        if (!$scope.user.username) {
            $scope.msg = "please enter valid email";
            console.log($scope.msg);
           

        }
        else if (!$scope.user.password) {
            $scope.msg = "please enter password";
            console.log($scope.msg);
          
        }
        else
        {   
            var url='json/login.json';
            var data = {'userName':$scope.user.username,'password':$scope.user.password}
            console.log(data);
            var promise = ajaxRequest.send(url,data);
            promise.then(function (data) {
                console.log(data);
             if(data.msg=="user login successfully"){
                 console.log('yes');
                 $state.go('view2');
             }
                  
            

        });
       
        }
    };
});