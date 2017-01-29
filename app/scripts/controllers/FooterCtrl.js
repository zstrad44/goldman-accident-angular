angular
.module('gaApp')
.controller('FooterCtrl', ['$scope', function($scope) {


  $scope.cities = ['Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Gilbert', 'Glendale', 'Chandler', 'Fountain Hills', 'Peoria', 'Surprise', 'Avondale'];
  $scope.legalPages = ['Privacy Policy', 'Sitemap', 'Disclaimer'];
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
  $scope.footerPages= [
    {
      id: 1,
      url: 'free-consultation',
      title: 'Free Consultation'
    },
    {
      id: 2,
      url: 'about',
      title: 'About Us'
    },
    {
      id: 3,
      url: 'contact',
      title: 'Contact'
    },
    {
      id: 4,
      url: 'faq',
      title: 'FAQ'
    }
  ];
  $scope.socialMedia = [
    {
      id: 1,
      url: 'https://www.facebook.com/goldmanaccidentlawyers',
      title: 'Facebook',
      faIcon: 'fa-facebook-square'
    },
    {
      id: 2,
      url: 'https://twitter.com/GoldmanAccident',
      title: 'Twitter',
      faIcon: 'fa-twitter-square'
    },
    {
      id: 3,
      url: 'https://www.yelp.com/biz/goldman-accident-lawyers-scottsdale',
      title: 'Yelp',
      faIcon: 'fa-yelp'
    },
    {
      id: 4,
      url: 'mailto:goldmansocialmedia@gmail.com',
      title: 'Email',
      faIcon: 'fa-envelope-square'
    }
  ];

}]);


  // $scope.socialMedia = [{facebook:'https://www.facebook.com/goldmanaccidentlawyers', twitter:'https://twitter.com/GoldmanAccident',yelp: 'https://www.yelp.com/biz/goldman-accident-lawyers-scottsdale' }]
