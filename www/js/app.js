// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

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
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  //Initial State for initial html
  // .state('base', {
  //   url: '',
  //   abstract: true,
  //   templateUrl: 'templates/base.html'
  // })

  .state('init', {
    url:'/init',
    templateUrl: 'templates/init-display.html',
    controller: 'InitCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

 .state('tab.paquetes', {
   url: '/paquetes',
   views: {
     'tab-paquetes': {
       templateUrl: 'templates/tab-paquetes.html',
       controller: 'PaquetesCtrl'
     }
   }
 })
 
 .state('tab.paquete-detail', {
   url: '/paquetes/:paqueteId',
   views: {
     'tab-paquetes': {
       templateUrl: 'templates/paquete-detail.html',
       controller: 'PaqueteDetailCtrl'
     }
   }
 })
 
 .state('tab.calculadora', {
    url: '/calculadora',
    views: {
      'tab-calculadora': {
        templateUrl: 'templates/tab-calculadora.html',
        controller: 'CalculadoraCtrl'
      }
    }
  })
  
  .state('tab.preaviso', {
    url: '/preaviso',
    views: {
      'tab-preaviso': {
        templateUrl: 'templates/tab-preaviso.html',
        controller: 'PreavisoCtrl'
      }
    }
  })

.state('sucursales',{
  url: '/sucursales-alone',
  templateUrl: 'templates/sucursales.html',
  controller: 'SucursalesCtrl'
})

.state('sucursal-detail', {
   url: '/sucursales-alone/:sucursalId',
   templateUrl: 'templates/sucursal-detail.html',
   controller: 'SucursalDetailCtrl'
 })

 .state('tab.sucursales', {
   url: '/sucursales',
   views: {
     'tab-sucursales': {
       templateUrl: 'templates/tab-sucursales.html',
       controller: 'SucursalesCtrl'
     }
   }
 })
 
 .state('tab.sucursal-detail', {
   url: '/sucursales/:sucursalId',
   views: {
     'tab-sucursales': {
       templateUrl: 'templates/sucursal-detail.html',
       controller: 'SucursalDetailCtrl'
     }
   }
 })
 
  .state('ofertas',{
    url: '/ofertas-alone',
    templateUrl: 'templates/ofertas.html',
    controller: 'OfertasCtrl'
  })

  .state('oferta-detail', {
    url: '/ofertas-alone/:ofertaId',
    templateUrl: 'templates/oferta-detail.html',
    controller: 'OfertaDetailCtrl'
  })

 .state('tab.ofertas', {
   url: '/ofertas',
   views: {
     'tab-ofertas': {
       templateUrl: 'templates/tab-ofertas.html',
       controller: 'OfertasCtrl'
     }
   }
 })
 
 .state('tab.oferta-detail', {
   url: '/ofertas/:ofertaId',
   views: {
     'tab-ofertas': {
       templateUrl: 'templates/oferta-detail.html',
       controller: 'OfertaDetailCtrl'
     }
   }
 })

  ;  
  $urlRouterProvider.otherwise('/init');
}
);