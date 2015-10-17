ajaxTime.factory('urlHelper', function($state) {
    var goview = {};
    goview.openlogin = function() {
        $state.go("login");
    };
    goview.openReport = function() {
        $state.go("main.Report");
    };
    goview.openBill_lading=function(data){
        $state.go("main.bill_lading",data);
    };
    goview.openMeasurement=function(data){
        $state.go("main.measurement",data);
    };
    goview.openMeasurement_page2=function(data){
        $state.go("main.measurement_page2",data);
    };
     goview.openDeclaration=function(data){
        $state.go("main.declaration",data);
    };
    goview.openFact_page2=function(){
        $state.go("main.fact_page2");
    };
    return goview;
});