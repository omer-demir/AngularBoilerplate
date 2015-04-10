(function(angular) {
	var injectParams=['$scope'];

	var mainController=function($scope) {
		$scope.message="Welcome to Angular Boilerplate";
	};

	mainController.$inject=injectParams;
	angular.module('app').controller('mainController',mainController);

})(window.angular);