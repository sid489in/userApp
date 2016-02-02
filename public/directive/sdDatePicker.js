var app=angular.module('userApp');

app.directive('sdDatePicker',function($compile){
	return {
		restrict : 'A',
		require : 'ngModel',
		scope : {
			'format' : '='
		},
		link : function(scope,element, attr,ngModel){
				$(element).datepicker({
					dateFormat : 'dd/mm/yy',
					onSelect : function(date){
						scope.$apply(function(){
							ngModel.$setViewValue(date);
						});
					}
				})
			
		}
	}
})