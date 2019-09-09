angular.module('AppCursos.controllers.Detalle', [])

.controller('DetalleController', function($scope,$routeParams,$http){
  
$http.get('http://10.7.4.17/ServicioPrueba/servicio.php?id='+$routeParams.cursoID).
then(function(response) {
    $scope.curso = response.data;
});

/////////
    $scope.unidades=[
        {'Unidad':'Unidad 1','Contenido':'CONCEPTOS DE HACKER Y CRACKER'},
        {'Unidad':'Unidad 2','Contenido':'TÉRMINOS COMUNES Y HERRAMIENTAS'},
        {'Unidad':'Unidad 3','Contenido':'PROTECCIÓN DE DATOS'},
        {'Unidad':'Unidad 4','Contenido':'SEGURIDAD'}

    ];
    $scope.aspectos=[
        {'Descripcion':'Los cursos se efectuarán en horario de 18h00 a 21h00.'},
        {'Descripcion':'Se realizarán dos controles de asistencia por parte del equipo del DEaDV.'},
        {'Descripcion':'Se efecturá un receso de 30 minutos (a consideración del tutor).'},
        {'Descripcion':'Acreditación (Aprobación): Los participantes deberán cumplir con la asistencia mínima: 90% o su equivalente en tutoría virtual y calificación mínima de 8.0/10 (Art. 32 - Reglamento DEaDV).'}

    ];

    $scope.redireccionar=function(){
        var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
        // relative document
        ref = window.open('http://educaciononline.uta.edu.ec:8080/utasys/faces/inscripciones/registroalx.xhtml', '_self');
    };

    


});

