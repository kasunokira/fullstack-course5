(function(){
	'use strict';

	angular.module('myFirstApp',[])
	.controller('myFirstController', function ($scope) {
		$scope.name="yaakov";
		$scope.sayHello=function(){
			return "Hello Coursera!";
		};	
	});
	
})();
