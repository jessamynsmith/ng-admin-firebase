'use strict';

angular.module('angularStarterProject.services', [])

  .factory('Help', function() {
    // In a real project, services are often used to source data, perhaps from an API
    return {
      text: function() {
        return "You can learn more about AngularJS by reading the documentation";
      },
      url: function() {
        return "https://docs.angularjs.org/api";
      }
    };
  });
