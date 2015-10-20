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
    'ngStorage',
    'PCC.measurement',
    'PCC.declaration',
    'PCC.fact',
    'PCC.sidenav',
    'PCC.main',
    'PCC.report',
    'ui.bootstrap.datetimepicker',
])
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {

            });
        }).
        config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
          .state('login', {
                        url: "/login",
                        templateUrl: "login_page/login.html",
                        controller: "PCC.LoginCtrl"
                    }).state('sidenav', {
                url: "/sidenav",
                templateUrl: "sidenav/sidenav.html",
                controller: 'PCC.sidenav'
            }).state('main', {
                url: "/main",
                templateUrl: "main/main.html",
                controller: 'PCC.mainCtrl'
            }).state('main.Report', {
                url: "/Report",
                views: {
                    'new': {
                        templateUrl: "Report_page/Report.html",
                        controller: 'PCC.ReportCtrl'
                    }
                }
            }).state('main.bill_lading', {
                url: "/bill_ladding/:manifest_no/:MV",
                views: {
                    'new': {
                        templateUrl: "bill_lading_page/bill_lading.html",
                        controller: 'PCC.BillCtrl'
                    }
                }

            }).state('main.measurement', {
                url: "/measurement/:bl_number/:MV",
                views: {
                    'new': {
                        templateUrl: "measurement_page/measurement.html",
                        controller: 'PCC.measureCtrl'
                    }
                }
            }).state('main.declaration', {
                url: "/declaration/:bl_number/:MV",
                views: {
                    'new': {
                        templateUrl: "declaration_page/declaration.html",
                        controller: 'PCC.declarationCtrl'
                    }
                }
            }).state('main.fact_page', {
                url: "/fact_page",
                views: {
                    'new': {
                        templateUrl: "fact_screen_page/fact_page.html",
                        controller: 'PCC.factCtrl'
                    }
                }
            }).state('main.fact_page2', {
                url: "/fact_page2",
                views: {
                    'new': {
                        templateUrl: "fact_screen_page/fact_page2.html",
                        controller: "PCC.factCtrl"
                    }
                }

            }).state('main.management_report_page', {
                url: "/management_reports",
                views: {
                    'new': {
                        templateUrl: "management_report_page/management_reports.html",
                        controller: 'PCC.reporstCtrl'
                    }
                }

            });




        });
