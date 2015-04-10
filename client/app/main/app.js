(function(angular) {
	var app=angular.module('app',['ngRoute']);
	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
		
		$routeProvider.when('/differ',{templateUrl:'main/indexDiffer.html',controller:'mainController'});
		$routeProvider.when('/',{templateUrl:'main/index.html',controller:'mainController'});
		$routeProvider.otherwise({redirectTo:'/'});

		$locationProvider.html5Mode({
			enabled:true
		});
	}]);
})(window.angular);