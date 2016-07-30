angular.module('starter.controllers', [])

.controller('InitCtrl', function($scope) {})

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
