// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ionic.service.push','ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('page1', {
      url: '/landingpage',
      templateUrl: 'templates/landingpage.html'
    })

  // setup an abstract state for the tabs directive
  .state('tab3', {
    url: '/tab3',
    abstract: true,
    templateUrl: 'templates/tabs3.html'
  })

  // Each tab has its own nav history stack:

  .state('tab3.budget3', {
    url: '/budget3',
    views: {
      'tab-budget': {
        templateUrl: 'templates/tab-budget3.html',
        controller: 'Budget3Ctrl'
      }
    }
  })

  .state('tab3.toolbox3', {
      url: '/toolbox3',
      views: {
        'tab-toolbox': {
          templateUrl: 'templates/tab-toolbox3.html',
          controller: 'Toolbox3Ctrl'
        }
      }
    })

  .state('tab3.dreams3', {
    url: '/dreams3',
    views: {
      'tab-dreams': {
        templateUrl: 'templates/tab-dreams3.html',
        controller: 'Dreams3Ctrl'
      }
    }
  })


  // setup an abstract state for the tabs directive
  .state('tab2', {
    url: '/tab2',
    abstract: true,
    templateUrl: 'templates/tabs2.html'
  })

  // Each tab has its own nav history stack:

  .state('tab2.budget2', {
    url: '/budget2',
    views: {
      'tab-budget': {
        templateUrl: 'templates/tab-budget2.html',
        controller: 'Budget2Ctrl'
      }
    }
  })

  .state('tab2.toolbox2', {
      url: '/toolbox2',
      views: {
        'tab-toolbox': {
          templateUrl: 'templates/tab-toolbox2.html',
          controller: 'Toolbox2Ctrl'
        }
      }
    })

  .state('tab2.dreams2', {
    url: '/dreams2',
    views: {
      'tab-dreams': {
        templateUrl: 'templates/tab-dreams2.html',
        controller: 'Dreams2Ctrl'
      }
    }
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })



  // Each tab has its own nav history stack:

  .state('tab.budget', {
    url: '/budget',
    views: {
      'tab-budget': {
        templateUrl: 'templates/tab-budget.html',
        controller: 'BudgetCtrl'
      }
    }
  })

  .state('tab.toolbox', {
      url: '/toolbox',
      views: {
        'tab-toolbox': {
          templateUrl: 'templates/tab-toolbox.html',
          controller: 'ToolboxCtrl'
        }
      }
    })

  .state('tab.dreams', {
    url: '/dreams',
    views: {
      'tab-dreams': {
        templateUrl: 'templates/tab-dreams.html',
        controller: 'DreamsCtrl'
      }
    }
  })

  .state('bankinfo',{
    url: '/bankinfo',
    templateUrl: 'templates/bankinfo.html'
  })

  .state('accountsuccess',{
    url: '/accountsuccess',
    templateUrl: 'templates/accountsuccess.html'
  })

  .state('necessaryexpenses',{
    url: '/necessaryexpenses',
    templateUrl: 'templates/necessaryexpenses.html'
  })

  .state('explorebudget1',{
    url: '/explorebudget1',
    templateUrl: 'templates/explorebudget1.html'
  })

  .state('explorebudget2',{
    url: '/explorebudget2',
    templateUrl: 'templates/explorebudget2.html'
  })

  .state('explorebudget3',{
    url: '/explorebudget3',
    templateUrl: 'templates/explorebudget3.html'
  })

  .state('localresources',{
    url: '/localresources',
    templateUrl: 'templates/localresources.html'
  })

  .state('paydayloan',{
    url: '/paydayloan',
    templateUrl: 'templates/paydayloan.html'
  })

  .state('socialservices',{
    url: '/socialservices',
    templateUrl: 'templates/socialservices.html'
  })

  .state('onemonth',{
    url: '/onemonth',
    templateUrl: 'templates/onemonth.html',
    controller: 'OnemonthCtrl'
  })

   .state('threemonths',{
    url: '/threemonths',
    templateUrl: 'templates/threemonths.html',
  })

  .state('vault',{
    url: '/vault',
    templateUrl: 'templates/vault.html',
  })

  .state('carsaving',{
    url: '/carsaving',
    templateUrl: 'templates/carsaving.html',
  })

  .state('askme',{
    url: '/askme',
    templateUrl: 'templates/askme.html',
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landingpage');

});
