var app = angular.module('userApp',['ngRoute']);

app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
	$locationProvider.html5Mode(true);
	$routeProvider.when('/home',{
		templateUrl : 'views/home.html',
		controller : 'userController'
	}).when('/profile',{
		templateUrl : 'views/profile.html',
		controller : 'userController'
	}).when('/searchVideo',{
		templateUrl : 'views/search.html',
		controller : 'searchController'	
	}).otherwise({
		redirectTo : '/home'
	})
}]);