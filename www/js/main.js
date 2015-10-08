require.config({
   baseUrl:'bower_components/',
   paths:{
      boilerplate:'html5-boilerplate/src/js/vendor/modernizr-2.8.3.min',
      angularAMD:'angularAMD/angularAMD.min',
      ionic:'lib/ionic/js/ionic.bundle',
      www:'../app',
      servise:'../js/service/service',
      login:'../login/login1',
      view2:'../view2/view2',

      
   },
   shim:{
       angularAMD:['angular'],
       angular:['boilerplate'],
       uirouter:['angular']
   }
   
});
require(['boilerplate','app'],function(){
    
});


