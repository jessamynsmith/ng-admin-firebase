'use strict';

angular.module('angularStarterProject.controllers', ['angularStarterProject.services'])

  .controller('HomeCtrl', function($scope, Help) {
    console.log("home");

    $scope.helpText = Help.text();
    $scope.helpUrl = Help.url();

  });
