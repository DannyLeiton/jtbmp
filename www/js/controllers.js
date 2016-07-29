angular.module('starter.controllers', [])

.controller('InitCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('PaquetesCtrl', function($scope, Paquetes) {
  $scope.paquetes = Paquetes.all();
  $scope.remove = function(paquete) {
    Paquetes.remove(paquete);
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
