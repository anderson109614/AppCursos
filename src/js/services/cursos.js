angular.module('AppCursos.services.cursos', [])

.factory('getCursos', function($http){
  return function(done) {
         $http({method: 'GET', url: 'http://localhost/ServicioPrueba/servicio.php'})
        .success(function(data, status, headers, config) {
          done(data);
        })
        .error(function(data, status, headers, config) {
          throw new Error('Unable to get weather');
        });
  };
});