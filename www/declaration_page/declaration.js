angular.module('PCC.declaration', [])

.controller('PCC.declarationCtrl',function($scope,$rootScope,$ionicPopup,$stateParams,$ionicHistory,urlHelper,ajaxRequest){
    $rootScope.showdata=false;
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
    
    $scope.itemOnLongPress = function() {
	console.log('Long press');
         popup = $ionicPopup.show({
                    scope: $scope,
                    templateUrl: 'declaration_page/declarationPopup.html'
                });
};
  $scope.closepopup = function() {
                popup.close();
                 $rootScope.showdata=false;
            };
}).directive('onLongPress', function($timeout) {
	return {
		restrict: 'A',
		link: function($scope, $elm, $attrs) {
			$elm.bind('touchstart', function(evt) {
				// Locally scoped variable that will keep track of the long press
				$scope.longPress = true;

				// We'll set a timeout for 600 ms for a long press
				$timeout(function() {
					if ($scope.longPress) {
						// If the touchend event hasn't fired,
						// apply the function given in on the element's on-long-press attribute
						$scope.$apply(function() {
							$scope.$eval($attrs.onLongPress);
						});
					}
				}, 600);
			});

			$elm.bind('touchend', function(evt) {
				// Prevent the onLongPress event from firing
				$scope.longPress = false;
				// If there is an on-touch-end function attached to this element, apply it
				if ($attrs.onTouchEnd) {
					$scope.$apply(function() {
						$scope.$eval($attrs.onTouchEnd)
					});
				}
			});
		}
	};
});

