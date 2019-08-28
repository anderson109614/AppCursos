angular.module('AppCursos', [
  'ngRoute',
  'mobile-angular-ui',
  'AppCursos.controllers.Main',
  'AppCursos.controllers.Detalle',
  'CursosApp.controllers.Nosotros'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false})
  .when('/detalleCurso/:cursoID', {templateUrl:'detalleCurso.html',  controller:'DetalleController', reloadOnSearch: false})
  .when('/asistencia', {templateUrl:'Asistencia.html', reloadOnSearch: false})
  .when('/certificados', {templateUrl:'Certificados.html', reloadOnSearch: false})
  .when('/encuesta', {templateUrl:'Encuesta.html', reloadOnSearch: false})
  .when('/trabaja', {templateUrl:'TrabajaNosotros.html', reloadOnSearch: false})
  .when('/paralelos', {templateUrl:'paralelos.html', reloadOnSearch: false})
  .when('/cursos', {templateUrl:'Cursos.html', reloadOnSearch: false,controller:'CursosController'});
});