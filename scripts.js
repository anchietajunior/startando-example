angular.module("startando", []);
angular.module("startando").controller("startandoCtrl", function ($scope, $http) {
	$scope.app = "Startando AngularJS PADG";
	$http.get('users.json').success(function(data) {
       $scope.users = data;
   });
});