angular
  .module('gaApp')
  .controller('ContactCtrl', ['$scope', function($scope) {


    

    var breakpoint = {
      desktop: "400px",
      mobile: "300px"
    };

    if (parseInt($(window).width()) > 1100) {
      $scope.mapHeight = breakpoint.desktop;
    } else {
      $scope.mapHeight = breakpoint.mobile;
    }
  }]);
