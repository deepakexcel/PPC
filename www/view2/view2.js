'use strict';

angular.module('PCC.view2', [])


.controller('View2Ctrl', function($scope,ajaxRequest) {
    var self=this;
  self.userList=function(){
       var url='json/page2.json';
           
            var promise = ajaxRequest.send(url);
            promise.then(function (data) {
                console.log(data);
              $scope.data=data;
           
         });  
    };
    self.userList();
});