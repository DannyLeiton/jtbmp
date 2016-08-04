angular.module('starter.controllers', [])

  .controller('InitCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, $state) {

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.oModal1 = modal;
    });

    // Open the login modal
    $scope.login = function () {
      $scope.oModal1.show();
    };

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.oModal1.hide();
    };

    $scope.doLogin = function () {
      $scope.showAlert('¡Autenticación correcta!');
    };

    // An alert dialog
    $scope.showAlert = function (texto) {
      var alertPopup = $ionicPopup.alert({
        title: texto
      });
      alertPopup.then(function (res) {
        $scope.loggedIn();
      });
    };

    // Succesfully Loggedin
    $scope.loggedIn = function () {
      $scope.oModal1.hide();
      $state.go('tab.paquetes');
    };

    $ionicModal.fromTemplateUrl('templates/afiliacion.html', {
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.oModal2 = modal;
    });

    $scope.afiliacion = function () {
      $scope.oModal2.show();
    };

    $scope.doAfiliacion = function () {
      $scope.showAlert2('¡Afiliado exitosamente!');
    };

    // An alert dialog
    $scope.showAlert2 = function (texto) {
      var alertPopup = $ionicPopup.alert({
        title: texto
      });
      alertPopup.then(function (res) {
        $scope.afiliado();
      });
    };

    $scope.afiliado = function () {
      $scope.oModal2.hide();
      $state.go('tab.paquetes');
    };

  })

  .controller('PaquetesCtrl', function ($scope, Paquetes, $ionicModal, $ionicPopup, $state) {
    $scope.items = [
      [{ nPaquete: 1, date:'2016-05-05', desc: "Xbox", state:'Entregado', type:"entregado" }, 
      { nPaquete: 2,date:'2016-05-05', desc: "PS4",type:"entregado" }, 
      { nPaquete: 3, date:'2016-05-05',desc: "Wii",type:"entregado" }]
      , [{ nPaquete: 4,date:'2016-05-05', desc: "Aifone", type:"entregado"}, 
      { nPaquete: 5,date:'2016-05-05', desc: "GBA",type:"entregado" }, 
      { nPaquete: 6, date:'2016-05-05',desc: "Wii u",type:"entregado" }]
      , [{ nPaquete: 7, date:'2016-05-05',desc: "S7", type:"bodegaCR" },
       { nPaquete: 8, date:'2016-05-05',desc: "huawei", type:"transCR" }, 
       { nPaquete: 9, date:'2016-05-05',desc: "3ds", type:"transSuc"}]];

    $scope.activeItems = $scope.items[0];

    $scope.changeTab = function (n) {
       //$scope.activeItems = [];
      $scope.activeItems = $scope.items[n];
    };

    $scope.doRefresh = function () {

      // $scope.items.push($scope.items[{nPaquete:$scope.items.length + 2,desc:"Xbox"+$scope.items.length + 2}]);
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');

    };

    $ionicModal.fromTemplateUrl('templates/micuenta.html', {
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.oModal1 = modal;
    });

    $scope.miCuenta = function() {
      $scope.oModal1.show();
    };

    $scope.closeCuenta = function() {
      $scope.oModal1.hide();
      $state.go('init');
    };

  })

  .controller('PaqueteDetailCtrl', function ($scope, $stateParams, Paquetes) {
    $scope.package = Paquetes.getpackage($stateParams.paqueteId);
  })

  .controller('CalculadoraCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $state) {
  $ionicModal.fromTemplateUrl('templates/micuenta.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

  $scope.miCuenta = function() {
    $scope.oModal1.show();
  };

  $scope.closeCuenta = function() {
    $scope.oModal1.hide();
    $state.go('init');
  };
})

.controller('PreavisoCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $state) {
  $ionicModal.fromTemplateUrl('templates/micuenta.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

  $scope.miCuenta = function() {
    $scope.oModal1.show();
  };

  $scope.closeCuenta = function() {
    $scope.oModal1.hide();
    $state.go('init');
  };
})

.controller('SucursalesCtrl', function($scope, Sucursales, $ionicModal, $ionicPopup, $timeout, $state) {
  $scope.sucursales = Sucursales.all();
  $ionicModal.fromTemplateUrl('templates/micuenta.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

   // Open the login modal
  $scope.miCuenta = function() {
    $scope.oModal1.show();
  };

  // Triggered in the login modal to close it
  $scope.closeCuenta = function() {
    $scope.oModal1.hide();
    $state.go('init');
  };
})

.controller('SucursalDetailCtrl', function($scope, $stateParams, Sucursales) {
  $scope.sucursal = Sucursales.get($stateParams.sucursalId);
})

.controller('OfertasCtrl', function($scope, Ofertas, $ionicModal, $ionicPopup, $timeout, $state) {
  $scope.ofertas = Ofertas.all();
  $scope.remove = function(oferta) {
    Ofertas.remove(oferta);
  };

  $ionicModal.fromTemplateUrl('templates/micuenta.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

   // Open the login modal
  $scope.miCuenta = function() {
    $scope.oModal1.show();
  };

  // Triggered in the login modal to close it
  $scope.closeCuenta = function() {
    $scope.oModal1.hide();
    $state.go('init');
  };

})

.controller('OfertaDetailCtrl', function($scope, $stateParams, Ofertas) {
  $scope.oferta = Ofertas.get($stateParams.ofertaId);
})

;
