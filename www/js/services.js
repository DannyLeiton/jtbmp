angular.module('starter.services', [])

  .factory('Paquetes', function () {

    var items = [
      {
        nPaquete: 1,
        state: 'Entregado',
        type: 'entregado',
        date: '2016-05-05',
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        desc: "Xbox",
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'

      },
      {
        nPaquete: 2,
        desc: "PS4",
        type: "entregado",
        state: 'Entregado',
        date: '2016-05-05',
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      },
      {
        nPaquete: 3,
        date: '2016-05-05',
        desc: "Wii",
        type: "entregado",        
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      }
      , {
        nPaquete: 4,
        date: '2016-05-05',
        desc: "Aifone",
        type: "entregado",        
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      },
      {
        nPaquete: 5,
        date: '2016-05-05',
        desc: "GBA",
        type: "entregado",        
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      },
      {
        nPaquete: 6,
        date: '2016-05-05',
        desc: "Wii u",
        type: "entregado",        
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      }
      , {
        nPaquete: 7,
        date: '2016-05-05',
        desc: "S7",
        type: "entregado",        
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      },
      {
        nPaquete: 8,
        date: '2016-05-05',
        desc: "huawei",
        type: "transCR",      
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      },
      {
        nPaquete: 9,
        date: '2016-05-05',
        desc: "3ds",
        type: "transSuc",      
        time: '2:00 pm',
        guide: '4348783',
        tracking: '1234567890',
        from: 'Amazon',
        promo: 'Aniversario',
        pieces: '1',
        weight: '8.0kg'
      }];

    var paquetes = [{
      id: 0,
      name: 'Zapatos',
      lastText: 'AMAZON',
      face: 'img/entregado.png'
    }, {
        id: 1,
        name: 'Camisetas',
        lastText: 'EBAY',
        face: 'img/preaviso.png'
      }, {
        id: 2,
        name: 'Juguetes',
        lastText: 'AMAZON',
        face: 'img/transCR.png'
      }, {
        id: 3,
        name: 'Libros',
        lastText: 'AMAZON',
        face: 'img/recibSuc.png'
      }, {
        id: 4,
        name: 'Video Juego',
        lastText: 'NEWEGG',
        face: 'img/bodegaCR.png'
      }];

    return {
      all: function () {
        return paquetes;
      },
      remove: function (paquete) {
        paquetes.splice(paquetes.indexOf(paquete), 1);
      },
      get: function (paqueteId) {
        for (var i = 0; i < paquetes.length; i++) {
          if (paquetes[i].id === parseInt(paqueteId)) {
            return paquetes[i];
          }
        }
        return null;
      },
      getpackage: function (paqueteId) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].nPaquete === parseInt(paqueteId)) {
            return items[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Sucursales', function () {
    var sucursales = [{
      id: 0,
      name: 'Desamparados',
      telefono: '2528-3737',
      email: 'bejetbox@jetbox.com',
      horario: 'Lunes - Miércoles - Domingos: 10:00am-1:00pm 1:30pm-8:00pm Martes - Jueves - Viernes - Sábados: 10:00am-8:00pm',
      direccion: 'Centro Comercial Expresso Desamparados(frente a entrada a Ferretería EPA)',
      face: 'img/desampa.png'
    }, {
        id: 1,
        name: 'Limón Centro',
        telefono: '2528-3737',
        email: 'bejetbox@jetbox.com',
        horario: 'Lunes - Miércoles - Domingos: 10:00am-1:00pm 1:30pm-8:00pm Martes - Jueves - Viernes - Sábados: 10:00am-8:00pm',
        direccion: 'Centro Comercial Expresso Limón(frente a entrada a Ferretería EPA)',
        face: 'img/limon.png'
      }, {
        id: 2,
        name: 'Curridabat',
        telefono: '2528-3737',
        email: 'bejetbox@jetbox.com',
        horario: 'Lunes - Miércoles - Domingos: 10:00am-1:00pm 1:30pm-8:00pm Martes - Jueves - Viernes - Sábados: 10:00am-8:00pm',
        direccion: 'Centro Comercial Expresso Curridabat(frente a entrada a Ferretería EPA)',
        face: 'img/curri.png'
      }, {
        id: 3,
        name: 'Heredia',
        telefono: '2528-3737',
        email: 'bejetbox@jetbox.com',
        horario: 'Lunes - Miércoles - Domingos: 10:00am-1:00pm 1:30pm-8:00pm Martes - Jueves - Viernes - Sábados: 10:00am-8:00pm',
        direccion: 'Centro Comercial Expresso Heredia(frente a entrada a Ferretería EPA)',
        face: 'img/heredia.png'
      }, {
        id: 4,
        name: 'San Francisco de Heredia',
        telefono: '2528-3737',
        email: 'bejetbox@jetbox.com',
        horario: 'Lunes - Miércoles - Domingos: 10:00am-1:00pm 1:30pm-8:00pm Martes - Jueves - Viernes - Sábados: 10:00am-8:00pm',
        direccion: 'Centro Comercial Expresso San Francisco(frente a entrada a Ferretería EPA)',
        face: 'img/sanfra.png'
      }];

    return {
      all: function () {
        return sucursales;
      },
      remove: function (sucursal) {
        sucursales.splice(sucursales.indexOf(sucursal), 1);
      },
      get: function (sucursalId) {
        for (var i = 0; i < sucursales.length; i++) {
          if (sucursales[i].id === parseInt(sucursalId)) {
            return sucursales[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Ofertas', function () {
    var ofertas = [{
      id: 0,
      name: 'Amazon.com',
      lastText: '',
      face: 'img/amazon.png'
    }, {
        id: 1,
        name: 'Ebay.com',
        lastText: '',
        face: 'img/ebay.png'
      }, {
        id: 2,
        name: 'Soccer.com',
        lastText: '',
        face: 'img/soccer.png'
      }, {
        id: 3,
        name: 'Woot.com',
        lastText: '',
        face: 'img/woot.png'
      }];

    return {
      all: function () {
        return ofertas;
      },
      remove: function (oferta) {
        ofertas.splice(ofertas.indexOf(oferta), 1);
      },
      get: function (ofertaId) {
        for (var i = 0; i < ofertas.length; i++) {
          if (ofertas[i].id === parseInt(ofertaId)) {
            return ofertas[i];
          }
        }
        return null;
      }
    };
  });
