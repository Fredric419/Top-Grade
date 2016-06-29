// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
// Admob Ads
    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) {
        admobid = { // for Android
                    banner: 'ca-app-pub-5486665575295540/2502140317',
                    interstitial: 'ca-app-pub-5486665575295540/3978873515'
                   };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
                    banner: 'ca-app-pub-5486665575295540/6198603516',
                    interstitial: 'ca-app-pub-5486665575295540/4721870317'
                   };
    } else {
        admobid = { // for Windows Phone
                    banner: 'ca-app-pub-5486665575295540/1925011110',
                    interstitial: 'ca-app-pub-5486665575295540/1925011110'
                   };
    }

    if (! AdMob ) {
        console.log('admob plugin not ready');
    }else {
        console.log("AdMob Creating Banner");
        AdMob.createBanner({
                                adId: admobid.banner,
                                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                                isTesting: false, // TODO: remove this line when release
                                overlap: false,
                                offsetTopBar: false,
                                bgColor: 'black'
                            });
        AdMob.prepareInterstitial({
                                  adId: admobid.interstitial,
                                  isTesting: false, // TODO: remove this line when release
                                  autoShow: true
                                });
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.finalgradebefore', {
        url: '/finalgradebefore',
        views: {
          'menuContent': {
            templateUrl: 'templates/finalgradebefore.html',
            controller: 'FinalGradeBeforeCtrl'
          }
        }
      })
  .state('app.finalgradeafter', {
      url: '/finalgradeafter',
      views: {
        'menuContent': {
          templateUrl: 'templates/finalgradeafter.html',
          controller: 'FinalGradeAfterCtrl'
        }
      }
    })
  .state('app.finalcounting', {
      url: '/finalcounting',
      views: {
        'menuContent': {
          templateUrl: 'templates/finalcounting.html',
          controller: 'FinalCountingCtrl'
        }
      }
    })
  .state('app.twoparts', {
      url: '/twoparts',
      views: {
        'menuContent': {
          templateUrl: 'templates/twoparts.html',
          controller: 'TwoPartsCtrl'
        }
      }
    })
  .state('app.classpointssystem', {
      url: '/classpointssystem',
      views: {
        'menuContent': {
          templateUrl: 'templates/classpointssystem.html',
          controller: 'ClassPointSystemCtrl'
        }
      }
    })
  .state('app.lowestgrade', {
      url: '/lowestgrade',
      views: {
        'menuContent': {
          templateUrl: 'templates/lowestgrade.html',
          controller: 'LowestGradeCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/finalgradebefore');
});
