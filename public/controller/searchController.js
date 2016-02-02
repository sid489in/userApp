var app = angular.module('userApp');

app.controller('searchController',function($scope,$http){

	$scope.search = function(){
		console.log('SSS'+$scope.searchStr);
		$http.get('api/videos',{params:{searchStr:$scope.searchStr}}).success(function(data){
			alert('done'+data);
		})
	}
})