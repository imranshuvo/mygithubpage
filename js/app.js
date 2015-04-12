var shuvo = angular.module('shuvo',['ngRoute']);

shuvo.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'views/home.html',
			controller: 'ListController'
		}).
		when('/communcation',{
			templateUrl: 'views/communcation.html'
		}).
		when('/difference',{
			templateUrl: 'views/differences.html'
		});
}]);