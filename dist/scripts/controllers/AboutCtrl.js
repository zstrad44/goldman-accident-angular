angular
  .module('gaApp')
  .controller('AboutCtrl', ['$scope', function($scope) {
    $scope.practiceAreas= [
      {
        id: 1,
        url: 'personal-injury',
        title: 'Personal Injury'
      },
      {
        id: 2,
        url: 'car-accidents',
        title: 'Car Accidents'
      },
      {
        id: 3,
        url: 'truck-accidents',
        title: 'Truck Accidents'
      },
      {
        id: 4,
        url: 'motorcycle-accidents',
        title: 'Motorcycle Accidents'
      }
    ];
  }]);
