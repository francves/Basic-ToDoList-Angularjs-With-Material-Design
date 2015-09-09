var app = angular.module("toDoListApp",["LocalStorageModule"])
.controller("myController",function($scope,localStorageService){
  if(localStorageService.get("angular-myToDoList")){
    $scope.toDo = localStorageService.get("angular-myToDoList");
  }
  else{
  $scope.toDo = [];
  }
  $scope.$watchCollection('toDo',function(newValue,oldValue){
  localStorageService.set("angular-myToDoList",$scope.toDo)    ;
});
  $scope.addActivity = function(){
    $scope.toDo.push($scope.newActivity);
    $scope.newActivity = {};
 //   localStorageService.set("angular-myToDoList",$scope.toDo); Al tener el wath nos ahorramos esta línea
    //angular-myToDoList es mi lista por hacer que va a ser buscada en el localstorage para agregar o mostrar listas de tareas. / angular-myToDoList is my list to do to be sought in the localStorage to add or display lists.
  }
    $scope.clean = function(){
      $scope.toDo = [];
   // localStorageService.set("angular-myToDoList",$scope.toDo); Al tener el wath nos ahorramos esta línea
  }
});