angular
  .module('gaApp')
  .service('PracticeData', function() {

  var PracticeData = {};

  var practiceAreas = [{
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

    PracticeData.getPracticeAreas = function () {
      return practiceAreas;
    };

    return PracticeData;

  });
