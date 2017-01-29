angular
.module('gaApp')
.controller('MasterCtrl', ['$scope', function($scope) {

  $scope.phoneNumber = '480-626-8483';
  $scope.date = new Date();

}]);
