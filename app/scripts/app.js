angular
  .module('gaApp', [
    'ui.router',
    'ngMeta'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'ngMetaProvider', function($urlRouterProvider, $stateProvider, $locationProvider, ngMetaProvider) {
    // ngMeta Default Configuration
    // ngMetaProvider.setDefaultTitle('Goldman Accident Lawyers Scottsdale');
    // ngMetaProvider.useTitleSuffix(true);
    // ngMetaProvider.setDefaultTitleSuffix(' | Goldman Accident Lawyers Scottsdale');
    // ngMetaProvider.setDefaultTag('type', 'website');
    // ngMetaProvider.setDefaultTag('url', 'http://goldmanaccidentlawyers.com/');
    // ngMetaProvider.setDefaultTag('image', 'http://goldmanaccidentlawyers.com/assets/images/logos/new_goldman_blue_FINAL_no_glow.png');
    // ngMetaProvider.setDefaultTag('description', 'Get help from a personal injury law firm in Scottsdale. Contact a personal injury and auto accident attorney in Arizona at Goldman Accident Lawyers.');
    // Remove hashbang
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: false,
    });
    // Redirect 404
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('master', {
        //url: '/',
        templateUrl: '/templates/master.html',
        abstract: true,
        controller: 'MasterCtrl'
      })
      .state('home', {
        url: '/',
        parent: 'master',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl',
        resolve: {
                  $title: function() {
                      return 'Home';
                  },
                  data: function(ngMeta) {
                      ngMeta.setTitle('Personal Injury Attorneys');
                      ngMeta.setTag('url', 'http://goldmanaccidentlawyers.com/');
                      ngMeta.setTag('type', 'website');
                      ngMeta.setTag('image', 'http://goldmanaccidentlawyers.com/assets/img/header/peoplelinx_logo.png');
                      ngMeta.setTag('description', 'Get help from a personal injury law firm in Scottsdale. Contact a personal injury and auto accident attorney in Arizona at Goldman Accident Lawyers.');
                      ngMeta.setTag('site_name', 'Goldman Accident Lawyers');
                  }
              }
      })
      .state('practice-areas', {
        url: '/practice-areas',
        parent: 'master',
        templateUrl: '/templates/practice-areas.html',
        controller: 'PracticeAreasCtrl'
      })
      // /////// START PRACTICE PAGES //////// //
      .state('practiceMaster', {
        url: '/practice',
        parent: 'master',
        templateUrl: '/templates/practice-master.html',
        abstract: true,
        controller: 'PracticeMasterCtrl'
      })
      .state('personal-injury', {
        url: '/personal-injury',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/personal-injury.html'
      })
      .state('car-accidents', {
        url: '/car-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/car-accidents.html'
      })
      .state('large-truck-accidents', {
        url: '/large-truck-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/large-truck-accidents.html'
      })
      .state('motorcycle-accidents', {
        url: '/motorcycle-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/motorcycle-accidents.html'
      })
      .state('bike-accidents', {
        url: '/bike-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/bike-accidents.html'
      })
      .state('burn-injuries', {
        url: '/burn-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/burn-injuries.html'
      })
      .state('dui-accidents', {
        url: '/dui-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/dui-accidents.html'
      })
      .state('pedestrian-accidents', {
        url: '/pedestrian-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/pedestrian-accidents.html'
      })
      .state('brain-injuries', {
        url: '/brain-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/brain-injuries.html'
      })
      .state('catastrophic-injuries', {
        url: '/catastrophic-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/catastrophic-injuries.html'
      })
      .state('spinal-cord-injuries', {
        url: '/spinal-cord-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/spinal-cord-injuries.html'
      })
      .state('dog-bite-injuries', {
        url: '/dog-bite-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/dog-bite-injuries.html'
      })
      .state('soft-tissue-injuries', {
        url: '/soft-tissue-injuries',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/soft-tissue-injuries.html'
      })
      .state('wrongful-death', {
        url: '/wrongful-death',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/wrongful-death.html'
      })
      .state('boating-accidents', {
        url: '/boating-accidents',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/boating-accidents.html'
      })
      .state('slip-and-fall-trip-and-fall', {
        url: '/slip-and-fall-trip-and-fall',
        parent: 'practiceMaster',
        templateUrl: '/templates/practice-areas/slip-and-fall-trip-and-fall.html'
      })
      // /////// END PRACTICES //////// //
      .state('free-consultation', {
        url: '/free-consultation',
        parent: 'master',
        templateUrl: '/templates/free-consultation.html',
        controller: 'FreeConsultationCtrl'
      })
      .state('about', {
        url: '/about',
        parent: 'master',
        templateUrl: '/templates/about.html',
        controller: 'AboutCtrl'
      })
      .state('faq', {
        url: '/faq',
        parent: 'master',
        templateUrl: '/templates/faq.html',
        controller: 'FaqCtrl'
      })
      .state('contact', {
        url: '/contact',
        parent: 'master',
        templateUrl: '/templates/contact.html',
        controller: 'ContactCtrl'
      })
      .state('blog', {
        url: 'http://goldmanaccidentlawyers.com/blog'
      });

      // $locationProvider.html5Mode(true);
  }])
  .run(['ngMeta', function(ngMeta) {
         ngMeta.init();
     }]);
