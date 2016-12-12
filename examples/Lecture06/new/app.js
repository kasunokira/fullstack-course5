(function () {
'use strict';

	angular.module("NameCalculator",[])
	.controller('NameCalculatorController', function ($scope){
		$scope.name="";
		$scope.totalValue = 0;
		$scope.displayNeumeric = function () {
			
			var totalNameValue = calculateNeumericForString($scope.name); //get the total value
			$scope.totalValue = totalNameValue;
			
		};	

		function calculateNeumericForString(string){
			var totalStringValue = 0;
    			for (var i = 0; i < string.length; i++) {
      				totalStringValue += string.charCodeAt(i);
    			}
    			return totalStringValue;
		}	
	});


})();
