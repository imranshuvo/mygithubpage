var list = angular.module('ListCtrl',[]);


list.controller('ListController',function($scope,localStorageService){
	$scope.todos = [];

	$scope.add = function(){
		if($scope.newTodo !== null){
			$scope.todos.push({taskName : $scope.newTodo , isDone : false})
			$scope.newTodo = "";
		}else{
			$scope.error = "Value is empty";
			console.log($scope.error);
		}
	};

	$scope.init = function(){
		 if (localStorageService.get("todoList")===null) {
		  $scope.todos = [
		   { taskName : "Create an Angular-js TodoList" , isDone : false }
		  ];
		 }else{
		   $scope.todos = localStorageService.get("todoList");
		 }
		 $scope.show = "Incomplete";
		};
		 
		$scope.$watch("todos",function  (newVal,oldVal) {
		 if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
		  localStorageService.add("todoList",angular.toJson(newVal));
		 }
		},true);


	$scope.deleteTodo = function  (index) {
		 $scope.todos.splice(index, 1);
		};


	$scope.sort = function  (todo) {
	    if ($scope.show === "All") {
	        return true;
	    }else if(todo.isDone && $scope.show === "Complete"){
	        return true;
	    }else if(!todo.isDone && $scope.show === "Incomplete"){
	        return true;
	    }else{
	        return false;
	    }
	};
});


