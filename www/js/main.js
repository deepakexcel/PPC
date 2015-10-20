require.config({
   baseUrl:'bower_components/',
   paths:{
      boilerplate:'html5-boilerplate/src/js/vendor/modernizr-2.8.3.min',
      angular:'lib/angular-material/angular-material.min',
      appmin:"lib/app.min",
      select:"lib/angular-ui-select/dist/select",
      ionic:'lib/ionic/js/ionic.bundle',
      chart:"lib/Chart",
      angularchart:"lib/angular-chart.js/angular-chart",
      datepicker:"lib/datetimepicker",
      screenfull:'lib/screenfull.min',
      moment:'lib/moment',
      www:'../app',
      servise:'../js/service/service',
      login:'../login_page/login',
      Report:'../Report_page/Report',
      bill_lading:'../bill_lading_page/bill_lading',
      measurement:'../measurement_page/measurement',
      declaration:'../declaration_page/declaration',
      fact_page:'../fact_screen_page/fact_page',
      management_reports:'../management_report_page/management_reports'
      

      
   },
   shim:{
       angularAMD:['angular'],
       angular:['boilerplate'],
       uirouter:['angular']
   }
   
});
require(['boilerplate','app'],function(){
    
});


