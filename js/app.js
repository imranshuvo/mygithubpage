var shuvo = angular.module('shuvo',['ngRoute']);

shuvo.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'views/home.html'
		}).
		when('/data-communication',{
			templateUrl: 'views/communication.html'
		}).
		when('/difference',{
			templateUrl: 'views/differences.html'
		}).
		when('/electromagnetic-fields-waves',{
			templateUrl: 'views/electromagnetic.html'
		}).
		when('/numerical-analysis',{
			templateUrl: 'views/numerical.html'
		}).
		when('/microprocessor-assembly',{
			templateUrl: 'views/microprocessor.html'
		}).
		when('/electronic-material',{
			templateUrl: 'views/material.html'
		}).
		when('/crystal',{
			templateUrl: 'views/crystal.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);

shuvo.controller('differenceCtrl',function($scope){

});