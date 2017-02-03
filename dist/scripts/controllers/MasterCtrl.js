angular
.module('gaApp')
.controller('MasterCtrl', ['$scope', function($scope, PracticeData) {

  // Company Information
  $scope.phoneNumber = '480-626-8483';
  $scope.contactEmail = 'info@goldmanaccidentlawyers.com';
  $scope.businessHours = 'Monday - Friday: 8:30 AM to 5:00 PM';
  $scope.addressStreetOne = "17851 N 85th St \#175";
  $scope.addressStreetTwo = "";
  $scope.addressCityStateZip = "Scottsdale, AZ 85255";
  $scope.addressCity = "Scottsdale";
  $scope.addressState = "AZ";
  $scope.addressZip = "85255";
  // varible for current date
  $scope.date = new Date();


   $scope.switchActive1 =  function () {
     $(function () {
       $scope.tabButton1 = $('.tabBtn1').click(function() {
         $(this).addClass("active");
         $('.tabBtn2').removeClass("active");
       });
    });
   };
   $scope.switchActive1();
   $scope.switchActive2 =  function () {
     $(function () {
       $scope.tabButton2 = $('.tabBtn2').click(function() {
         $(this).addClass("active");
         $('.tabBtn1').removeClass("active");
       });
    });
   };
   $scope.switchActive2();
  // Nav dropdownMenu script; adding functionality open on hover for desktop breakpoints
  $scope.initDropdownMenu = function () {
    $(function () {
      // wait till load event fires so all resources are available
      $scope.dropdownMenu = $('ul.nav li.dropdown').hover(function() {
        if (parseInt($(window).width()) > 1100) {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(500);
        }
      }, function() {
        if (parseInt($(window).width()) > 1100) {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(400);
        }
      });
    });
  };
    $scope.initDropdownMenu();
// console.log(PracticeData.getPracticeAreas());
//   $scope.practiceAreas = PracticeData.getPracticeAreas();

    $scope.practiceAreas  = [
        {
          id: 1,
          url: 'personal-injury',
          title: 'Personal Injury',
          titlePlural: 'Personal Injuries',
          icon: '/personal-injury.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 2,
          url: 'car-accidents',
          title: 'Car Accident',
          titlePlural: 'Car Accidents',
          icon: '/car-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 3,
          url: 'large-truck-accidents',
          title: 'Truck Accident',
          titlePlural: 'Truck Accidents',
          icon: '/large-truck-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 4,
          url: 'motorcycle-accidents',
          title: 'Motorcycle Accident',
          titlePlural: 'Motorcycle Accidents',
          icon: '/motorcycle-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 5,
          url: 'bike-accidents',
          title: 'Bike Accident',
          titlePlural: 'Bike Accidents',
          icon: '/bike-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 6,
          url: 'burn-injuries',
          title: 'Burn Injury',
          titlePlural: 'Burn Injuries',
          icon: '/burn-injuries.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 7,
          url: 'dui-accidents',
          title: 'DUI Accident',
          titlePlural: 'DUI Accidents',
          icon: '/dui-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 8,
          url: 'pedestrian-accidents',
          title: 'Pedestrian Accident',
          titlePlural: 'Pedestrian Accidents',
          icon: '/pedestrian-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 9,
          url: 'brain-injuries',
          title: 'Brain Injury',
          titlePlural: 'Brain Injuries',
          icon: '/brain-injuries.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 10,
          url: 'catastrophic-injuries',
          title: 'Catastrophic Injury',
          titlePlural: 'Catastrophic Injuries',
          icon: '/catastrophic-injuries.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 11,
          url: 'spinal-cord-injuries',
          title: 'Spinal Cord Injury',
          titlePlural: 'Spinal Cord Injuries',
          icon: '/spinal-cord-injuries.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 12,
          url: 'dog-bite-injuries',
          title: 'Dog Bite Injury',
          titlePlural: 'Dog Bite Injuries',
          icon: '/dog-bite-injuries-2.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 13,
          url: 'soft-tissue-injuries',
          title: 'Soft Tissue Injury',
          titlePlural: 'Soft Tissue Injuries',
          icon: '/soft-tissue-injuries.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 14,
          url: 'wrongful-death',
          title: 'Wrongful Death',
          titlePlural: 'Wrongful Deaths',
          icon: '/wrongful-death.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 15,
          url: 'boating-accidents',
          title: 'Boating Accident',
          titlePlural: 'Boating Accidents',
          icon: '/boating-accidents.png',
          alt: ' Attorney icon, png'
        },
        {
          id: 16,
          url: 'slip-and-fall-trip-and-fall',
          title: 'Slip and Fall Injury',
          titlePlural: 'Slip and Fall Injuries',
          icon: '/slip-and-fall-injuries.png',
          alt: ' Attorney icon, png'
        }
      ];

}]);
