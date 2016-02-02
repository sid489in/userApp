var app = angular.module('userApp');

app.controller('userController',function($scope,$http){
	var users= [{
		"userName" : 'sid2010in',
		"password" :'sunshine',
		"fname" : 'sidharth',
		"lname" :'s',
		"email" : "sid2010in@gmail.com"
	}];

	$scope.user = users[0];
	$scope.$parent.user = $scope.user;
	
});