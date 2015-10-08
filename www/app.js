'use strict';

// Declare app level module which depends on views, and components
angular.module('PCC', [
    'ionic',
    'PCC.login',
    'PCC.view2',
   'ajaxservice'

])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {

            });
        }).
        config(function ($stateProvider, $urlRouterProvider) {
             $urlRouterProvider.otherwise('login');
            $stateProvider
                    .state('login', {
                        url: "/login",
                        templateUrl: "login/login.html",
                        controller: "PCC.LoginCtrl"
                    })
                    .state('view2', {
                        url: "/view2",
                        templateUrl: "view2/view2.html",
                        controller: 'View2Ctrl'
                    });


           
        });
