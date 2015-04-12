var todo = angular.module('todo',['ngRoute','ListCtrl','ListDir','LocalStorageModule']);

todo.config(function($routeProvider,$httpProvider){
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
});