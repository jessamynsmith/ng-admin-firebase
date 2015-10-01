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

  .config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params) {
      // The firebase api has an unusual interface, so this may not be helpful. Leaving it here for reference.
      if (operation == "getList") {
        //// custom sort params
        //if (params._sortField && params._sortField == "name") {
        //  params.orderBy = '\"' + params._sortField + '\"';
        //  params.startAt = '\"A\"';
        //}
        //delete params._sortField;
        //delete params._sortDir;
        //
        //// custom pagination params
        //if (params._page && params.orderBy && params.orderBy == "id") {
        //  params.startAt = (params._page - 1) * params._perPage;
        //  params.endAt = params._page * params._perPage;
        //}
        //delete params._page;
        //delete params._perPage;
        //
        //// custom filters
        //if (params._filters) {
        //  for (var filter in params._filters) {
        //    params[filter] = params._filters[filter];
        //  }
        //}
        //delete params._filters;
      }
      return {params: params};
    });

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var results = data;
      if (Object.prototype.toString.call(results) !== '[object Array]') {
        // transform object to array
        results = [];
        for (var property in data) {
          if (data.hasOwnProperty(property)) {
            results.push(data[property]);
          }
        }
      }

      var sortField = response.config.params["_sortField"];
      var sortDirection = response.config.params["_sortDir"];
      var lessThanResult = -1;
      var greaterThanResult = 1;
      if (sortDirection == "DESC") {
        lessThanResult = 1;
        greaterThanResult = -1;
      }
      var compareSortFields = function(a, b) {
        if (a[sortField] < b[sortField])
          return lessThanResult;
        if (a[sortField] > b[sortField])
          return greaterThanResult;
        return 0;
      };

      if (results[0].hasOwnProperty(sortField)) {
        results.sort(compareSortFields);
      }

      return results;
    });
  }])
;
