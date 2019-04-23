angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iNNOVALaRioja.eleccionesLaRioja2019', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eleccionesLaRioja2019.html',
        controller: 'eleccionesLaRioja2019Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page22', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page22.html',
        controller: 'page22Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page2', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page3', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja', {
    url: '/side-menu21',
    templateUrl: 'templates/iNNOVALaRioja.html',
    controller: 'iNNOVALaRiojaCtrl'
  })

  .state('iNNOVALaRioja.page4', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});