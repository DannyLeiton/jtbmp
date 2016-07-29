angular.module('starter.services', [])

.factory('Paquetes', function() {
  var paquetes = [{
    id: 0,
    name: 'Zapatos',
    lastText: 'AMAZON',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Camisetas',
    lastText: 'EBAY',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Juguetes',
    lastText: 'AMAZON',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Libros',
    lastText: 'AMAZON',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Video Juego',
    lastText: 'NEWEGG',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return paquetes;
    },
    remove: function(paquete) {
      paquetes.splice(paquetes.indexOf(paquete), 1);
    },
    get: function(paqueteId) {
      for (var i = 0; i < paquetes.length; i++) {
        if (paquetes[i].id === parseInt(paqueteId)) {
          return paquetes[i];
        }
      }
      return null;
    }
  };
})

.factory('Sucursales', function() {
  var sucursales = [{
    id: 0,
    name: 'Desamparados',
    lastText: '',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Limón Centro',
    lastText: '',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Curridabat',
    lastText: '',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Heredia',
    lastText: '',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'San Francisco de Heredia',
    lastText: '',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return sucursales;
    },
    remove: function(sucursal) {
      sucursales.splice(sucursales.indexOf(sucursal), 1);
    },
    get: function(sucursalId) {
      for (var i = 0; i < sucursales.length; i++) {
        if (sucursales[i].id === parseInt(sucursalId)) {
          return sucursales[i];
        }
      }
      return null;
    }
  };
})

.factory('Ofertas', function() {
  var ofertas = [{
    id: 0,
    name: 'Amazon.com',
    lastText: '',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Ebay.com',
    lastText: '',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Soccer.com',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Woot.com',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }];

  return {
    all: function() {
      return ofertas;
    },
    remove: function(oferta) {
      ofertas.splice(ofertas.indexOf(oferta), 1);
    },
    get: function(ofertaId) {
      for (var i = 0; i < ofertas.length; i++) {
        if (ofertas[i].id === parseInt(ofertaId)) {
          return ofertas[i];
        }
      }
      return null;
    }
  };
});
