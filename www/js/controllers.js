angular.module('starter.controllers', [])

.controller('InitCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $state) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Succesfully Loggedin
  $scope.loggedIn = function() {
    $scope.modal.hide();
    $state.go('tab.paquetes');
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);
    $scope.showAlert('¡Autenticación correcta!');
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    /*$timeout(function() {
      $scope.closeLogin();
    }, 1000);*/
  };

 // An alert dialog
$scope.showAlert = function(texto) {
   var alertPopup = $ionicPopup.alert({
     title: texto
   });
   alertPopup.then(function(res) {
     $scope.loggedIn();
   });
 };



})

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('PaquetesCtrl', function($scope, Paquetes) {
  $scope.items= [ [{nPaquete:1,desc:"Xbox"},{nPaquete:2,desc:"PS4"},{nPaquete:3,desc:"Wii"}]
   ,[{nPaquete:1,desc:"Aifone"},{nPaquete:2,desc:"GBA"},{nPaquete:3,desc:"Wii u"}]
  ,[{nPaquete:1,desc:"S7"},{nPaquete:2,desc:"huawei"},{nPaquete:3,desc:"3ds"}] ];
  
   $scope.activeItems = $scope.items[0];
  
  $scope.changeTab = function (n) {
      $scope.activeItems = $scope.items[n];
      $scope.$appy();
  };
  
  $scope.doRefresh = function() {
    
   // $scope.items.push($scope.items[{nPaquete:$scope.items.length + 2,desc:"Xbox"+$scope.items.length + 2}]);
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
  
  };
})

.controller('PaqueteDetailCtrl', function($scope, $stateParams, Paquetes) {
  $scope.paquete = Paquetes.get($stateParams.paqueteId);
})

.controller('CalculadoraCtrl', function($scope) {})

.controller('PreavisoCtrl', function($scope) {})

.controller('SucursalesCtrl', function($scope, Sucursales) {
  $scope.sucursales = Sucursales.all();
  $scope.remove = function(sucursal) {
    Sucursales.remove(sucursal);
  };
})

.controller('SucursalDetailCtrl', function($scope, $stateParams, Sucursales) {
  $scope.sucursal = Sucursales.get($stateParams.sucursalId);
})

.controller('OfertasCtrl', function($scope, Ofertas) {
  $scope.ofertas = Ofertas.all();
  $scope.remove = function(oferta) {
    Ofertas.remove(oferta);
  };
})

.controller('OfertaDetailCtrl', function($scope, $stateParams, Ofertas) {
  $scope.oferta = Ofertas.get($stateParams.ofertaId);
})

;
