ajaxTime.factory('urlHelper', function($state) {
    var goview = {};
    goview.openlogin = function() {
        $state.go("login");
    };
    goview.openReport = function() {
        $state.go("Report");
    };
    goview.openBill_lading=function(data){
        $state.go("bill_lading",data);
    };
    goview.openMeasurement=function(data){
        $state.go("measurement",data);
    };
    goview.openMeasurement_page2=function(data){
        $state.go("measurement_page2",data);
    };
     goview.openDeclaration=function(data){
        $state.go("declaration",data);
    };
    return goview;
});