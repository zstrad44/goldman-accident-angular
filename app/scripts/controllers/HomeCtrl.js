angular
  .module('gaApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.heroBackgroundImg = "'/assets/images/stock_images/car accident2.jpg'";
  }]);


  // var app = angular.module('gaApp', []);
  // app.controller("HomeCtrl", ["$scope", function($scope) {
  //   $scope.heroBackgroundImg = "'/assets/images/stock_images/car accident2.jpg'";
  // }]);

// (function() {
//     function HomeCtrl($scope) {
//         $scope.heroBackgroundImg = "'/assets/images/stock_images/car accident2.jpg'";
//     }
//
//
//
//     angular
//         .module('gaApp')
//         .controller('HomeCtrl',['$scope', HomeCtrl] );
// })();
