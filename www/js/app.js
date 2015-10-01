// Angular Starter App

'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires'
//var app = angular.module('angularStarterProject', ['ui.router', 'angularStarterProject.controllers'])
angular.module('angularStarterProject', ['ui.router', 'ng-admin', 'angularStarterProject.controllers'])

  .config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;
    // create an admin application
    var admin = nga.application('My First Admin');
    // more configuation here later
    // ...
    // attach the admin application to the DOM and run it
    nga.configure(admin);
  }])

  .run(function() {
    // Add run code here
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

  })
;
