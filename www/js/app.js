// Angular Starter App

'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires'
angular.module('ngAdminFirebase', ['ng-admin'])

  .config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    var firebaseRootUrl = "https://ng-admin-starter.firebaseio.com/";
    var admin = nga.application('My First Admin')
      .baseApiUrl(firebaseRootUrl);

    var author = nga.entity('authors').url(function(view, viewType, entityId) {
      var url = firebaseRootUrl + view + '.json';
      if (entityId) {
        url = firebaseRootUrl + view + '/' + entityId + '.json';
      }
      return url;
    });

    //TODO Fix sorting of list view
    author.listView().fields([
      nga.field('name'),
    ])
      .listActions(['show']);

    author.showView().fields([
      nga.field('name'),
      nga.field('birth_year'),
    ]);
    // add the user entity to the admin application
    admin.addEntity(author);

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
  }])

  .run(function() {
    // Add run code here
  })
;
