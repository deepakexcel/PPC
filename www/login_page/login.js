'use strict';

angular.module('PCC.login', [])


.controller('PCC.LoginCtrl', function($scope,ajaxRequest,urlHelper,timeStorage) {
    var self=this;
    $scope.user={
         password:''
    };
    $scope.person={
        selected:''
    };
    self.userList=function(){
       var url='json/userlist.json';
           
            var promise = ajaxRequest.send(url);
            promise.then(function (data) {
                console.log(data);
              console.log(data.user_name);
                $scope.people=data;
            
         });  
    };
    self.userList();
//    $scope.people=[{name:'siddharth'},
//                    {name:'vaibhav'},
//                    {name:'anurag'}]
               
    $scope.submit=function(){
        console.log($scope.person.selected.user_name);
        if (!$scope.person.selected.user_name) {
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
            var data = {'userName':$scope.person.selected.user_name,'password':$scope.user.password}
            console.log(data);
            var promise = ajaxRequest.send(url,data);
            promise.then(function (data) {
                console.log(data);
             if(data.msg=="user login successfully"){
                 console.log('yes');
                 timeStorage.set('login',$scope.person.selected.user_name,200);
                 urlHelper.openReport();
             }
                  
            

        });
       
        }
    };
});