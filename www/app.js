'use strict';

// Declare app level module which depends on views, and components
angular.module('PCC', [
    'ionic',
    'PCC.login',
    'PCC.Report',
    'PCC.bill',
    'ajaxservice',
    'ui.select',
    'ngMaterial',
    'PCC.measurement',
    'PCC.measurement_page2',
    'PCC.declaration',
    'PCC.fact',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker'
    
    
 

])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {

            });
        }).
        config(function ($stateProvider, $urlRouterProvider) {
             $urlRouterProvider.otherwise('/login');
            $stateProvider
                    .state('login', {
                        url: "/login",
                        templateUrl: "login_page/login.html",
                        controller: "PCC.LoginCtrl"
                    })
                    .state('Report', {
                        url: "/Report",
                        templateUrl: "Report_page/Report.html",
                        controller: 'PCC.ReportCtrl'
                    }).state('bill_lading', {
                        url: "/bill_ladding/:manifest_no/:MV",
                        templateUrl: "bill_lading_page/bill_lading.html",
                        controller: 'PCC.BillCtrl'
                    }).state('measurement', {
                        url: "/measurement/:bl_number/:MV",
                        templateUrl: "measurement_page/measurement.html",
                        controller: 'PCC.measureCtrl'
                    }).state('measurement_page2', {
                        url: "/measurement_page2/:bl_number/:MV",
                        templateUrl: "measurement_page/measurement.html",
                        controller: 'PCC.measure2Ctrl'
                    }).state('declaration', {
                        url: "/declaration/:bl_number/:MV",
                        templateUrl: "declaration_page/declaration.html",
                        controller: 'PCC.declarationCtrl'
                    }).state('fact_page', {
                        url: "/fact_page",
                        templateUrl: "fact_screen_page/fact_page.html",
                         controller: 'PCC.factCtrl'
                    });



           
        });
