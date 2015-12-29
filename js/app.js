'use strict';


/* App Module */
var app = angular.module('app',[]);

app.controller('appCtrl', function($scope){
    $scope.tareas = [{texto: 'Definir la ruta a seguir', hecho: false},
                     {texto: 'Preparar la moto para llevar bolsas sobre las maletas', hecho: false}];
    
    $scope.agregarTarea = function(){
        $scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
        $scope.textoNuevaTarea = '';
    };
    
    $scope.restantes = function(){
        var cuenta = 0;
        angular.forEach($scope.tareas, function(tarea){
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    };
    
    $scope.eliminar = function(){
        var tareasViejas = $scope.tareas;
        $scope.tareas = [];
        angular.forEach(tareasViejas, function(tarea){
            if (!tarea.hecho) $scope.tareas.push(tarea);
        });
    };
    
});


app.controller('ControladorFiltros', ['$scope', function($scope) {
  $scope.etapas =
    [
      {
        dia: new Date('07/01/2016'), salida: 'Madrid', llegada: 'Donosti', notas: 'primera etapa del gran viaje',
        kms: 466, alojamiento: '----', peaje: 0, gasolina: 0, dormir: 0, comer: 0, otros: 0, total: 0
      }

    ];

  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };
}]);