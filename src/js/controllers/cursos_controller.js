angular.module('CursosApp.controllers.Nosotros', [])

.controller('CursosController', function($scope,$http){

    $http.get('http://10.7.3.107/ServicioPrueba/servicio.php').
        then(function(response) {
            $scope.cursos = response.data;
    });




});