angular-starter-project
=======================

A simple starter project for AngularJS

You can see a running example hosted on [firebase](https://ng-admin-starter.firebaseapp.com/#/authors/list).


Development
-----------
  
1. Install dependencies

		npm install
		bower install
    
1. Sign up for a firebase account and create some data

1. Verify that your data is readable without logging in, using curl on the command line:

		curl -v -k -X GET -H "Content-Type: application/json" https://ng-admin-starter.firebaseio.com/authors.json?

1. Edit app.js to point to your firebase data, and modify the entity to match yours.

1. Open index.html in a browser


Continuous Integration
----------------------

### Circle CI

[Circle CI](https://circleci.com/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. Circle is 
configured using the `circle.yml` file. You need to sign up for Circle and enable this project.
