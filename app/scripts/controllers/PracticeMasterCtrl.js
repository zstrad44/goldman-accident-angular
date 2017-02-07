angular
  .module('gaApp')
  .controller('PracticeMasterCtrl', ['$scope', '$location', '$state','$rootScope', function($scope, $location, $state, $rootScope) {

    $scope.$on('$stateChangeSuccess', function () {
       window.scrollTo(0, 0);
      for(var i = 0; i < $scope.practiceAreas.length; i++) {
        if( $state.current.name === $scope.practiceAreas[i].url ) {
          $scope.pageTitle = $scope.practiceAreas[i].title;
          $scope.titlePlural = $scope.practiceAreas[i].titlePlural;
          $scope.pageIcon = $scope.practiceAreas[i].icon;
          $scope.pageIconAlt = $scope.practiceAreas[i].alt;
        }
      }
    });
    $scope.iconLocation = 'assets/images/practice-area-icons/png/';
    $scope.iconColors = [{normal:'gray', hover: 'white', primary: 'blue'}];

    // $scope.practiceAreas= [
    //   {
    //     id: 1,
    //     url: 'personal-injury',
    //     title: 'Personal Injury',
    //     icon: '/personal-injury.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 2,
    //     url: 'car-accidents',
    //     title: 'Car Accidents',
    //     icon: '/car-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 3,
    //     url: 'large-truck-accidents',
    //     title: 'Truck Accidents',
    //     icon: '/large-truck-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 4,
    //     url: 'motorcycle-accidents',
    //     title: 'Motorcycle Accidents',
    //     icon: '/motorcycle-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 5,
    //     url: 'bike-accidents',
    //     title: 'Bike Accidents',
    //     icon: '/bike-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 6,
    //     url: 'burn-injuries',
    //     title: 'Burn Injuries',
    //     icon: '/burn-injuries.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 7,
    //     url: 'dui-accidents',
    //     title: 'DUI Accidents',
    //     icon: '/dui-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 8,
    //     url: 'pedestrian-accidents',
    //     title: 'Pedestrian Accidents',
    //     icon: '/pedestrian-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 9,
    //     url: 'brain-injuries',
    //     title: 'Brain Injuries',
    //     icon: '/brain-injuries.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 10,
    //     url: 'catastrophic-injuries',
    //     title: 'Catastrophic Injuries',
    //     icon: '/catastrophic-injuries.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 11,
    //     url: 'spinal-cord-injuries',
    //     title: 'Spinal Cord Injuries',
    //     icon: '/spinal-cord-injuries.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 12,
    //     url: 'dog-bite-injuries',
    //     title: 'Dog Bite Injuries',
    //     icon: '/dog-bite-injuries-2.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 13,
    //     url: 'soft-tissue-injuries',
    //     title: 'Soft Tissue Injuries',
    //     icon: '/soft-tissue-injuries.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 14,
    //     url: 'wrongful-death',
    //     title: 'Wrongful Death',
    //     icon: '/wrongful-death.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 15,
    //     url: 'boating-accidents',
    //     title: 'Boating Accidents',
    //     icon: '/boating-accidents.png',
    //     alt: ' Attorney icon, png'
    //   },
    //   {
    //     id: 16,
    //     url: 'slip-and-fall-trip-and-fall',
    //     title: 'Slip and Fall Injuries',
    //     icon: '/slip-and-fall-injuries.png',
    //     alt: ' Attorney icon, png'
    //   }
    // ];

  }]);
