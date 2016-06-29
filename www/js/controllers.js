angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, $cordovaSocialSharing) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the result modal
  $rootScope.ResultData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/result.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeCalc = function() {
    $scope.modal.hide();
  };

  $scope.shareFB = function()   // Share via Facebook
  {
    console.log('Share Facebook', $scope.textFB);
    if(window.plugins && window.plugins.socialsharing){
      window.plugins.socialsharing.shareViaFacebook('Message via Facebook',
                                                    null /* img */,
                                                    null /* url */,
                                                    function() {
                                                      console.log('share ok')
                                                    },
                                                    function(errormsg){
                                                      console.log('share failed reason : ', errormsg);
                                                    });
    }
  };

  $scope.shareTW = function()   // Share via Twitter
  {
      console.log('Share Twitter', $scope.textTW);
      if(window.plugins && window.plugins.socialsharing)
      {
          window.plugins.socialsharing.shareViaTwitter( '',
                                                        null /* img */,
                                                        '',
                                                        function() {
                                                          console.log('Twitter Share ok')
                                                        },
                                                        function(errormsg){
                                                          console.log('Twitter Share failed reason : ', errormsg);
                                                        }
                                                      )
      }
  };

  $scope.shareEM = function()   // Share via Email
  {
      console.log('Share Email', $scope.textEM);
      if(window.plugins && window.plugins.emailComposer) {
              window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                  console.log("Response -> " + result);
              },
              "",                      // Subject
              "",                      // Body
              null,                    // To
              null,                    // CC
              null,                    // BCC
              false,                   // isHTML
              null,                    // Attachments
              null);                   // Attachment Data
      }
  };
})

.controller('FinalGradeBeforeCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_final($scope.InputData.before, $scope.InputData.gotfinal, $scope.InputData.worth);

    if ($scope.ResultData.result){
      $rootScope.textFB = "FinalGradeBefore facebook";
      $rootScope.textTW = "FinalGradeBefore twitter";
      $rootScope.textEM = "FinalGradeBefore mail";
      $scope.modal.show();
    }
  };
})

.controller('FinalGradeAfterCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_overall($scope.InputData.current, $scope.InputData.desired, $scope.InputData.worth);

    if ($scope.ResultData.result){
      $rootScope.textFB = "FinalGradeAfterCtrl facebook";
      $rootScope.textTW = "FinalGradeAfterCtrl twitter";
      $rootScope.textEM = "FinalGradeAfterCtrl mail";
      $scope.modal.show();
    }
  };
})

.controller('FinalCountingCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_test($scope.InputData.current,
                                         $scope.InputData.desired,
                                         $scope.InputData.testweight,
                                         $scope.InputData.takentest,
                                         $scope.InputData.testaverage,
                                         $scope.InputData.finalweight);
    console.log($scope.ResultData.result);
    if ($scope.ResultData.result){
      $rootScope.textFB = "FinalCountingCtrl facebook";
      $rootScope.textTW = "FinalCountingCtrl twitter";
      $rootScope.textEM = "FinalCountingCtrl mail";
      $scope.modal.show();
    }
  };
})

.controller('TwoPartsCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.fianlpartsCount = 0;
  $scope.fianlpartsLabel = ["1st Part Weight",
                            "2nd Part Weight",
                            "3rd Part Weight",
                            "4th Part Weight",
                            "5th Part Weight",
                            "6th Part Weight",
                            "7th Part Weight",
                            "8th Part Weight"];

  $scope.takenpartsCount = 0;
  $scope.takenpartsLabel = ["On part 1 points",
                            "On part 2 points",
                            "On part 3 points",
                            "On part 4 points",
                            "On part 5 points",
                            "On part 6 points",
                            "On part 7 points",
                            "On part 8 points"];

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_parts($scope.InputData.current,
                                         $scope.InputData.desired,
                                         $scope.InputData.testweight,
                                         $scope.InputData.finalparts,
                                         $scope.InputData.takenparts);
    console.log($scope.ResultData.result);

    if ($scope.ResultData.result){
      $rootScope.textFB = "TwoPartsCtrl facebook";
      $rootScope.textTW = "TwoPartsCtrl twitter";
      $rootScope.textEM = "TwoPartsCtrl mail";
      $scope.modal.show();
    }
  };

  $scope.OnFianlPartsCountChange = function() {
    console.log("Final Parts count change");
    var value = $scope.InputData.finalparts;
    if (!isNaN(value)) {
      if (value > 8) {
        value = 8;
        $scope.InputData.finalparts = 8;
      }
      $scope.fianlpartsCount = value;
      var arrModels = [];
      for (var i=0; i< value; i++) {
        arrModels.push(i);
      }

      $scope.finalPartsModel = arrModels;
    }
  }

  $scope.OnTakenPartsCountChange = function() {
    console.log("Taken Parts count change");
    var value = $scope.InputData.takenparts;
    if (!isNaN(value)) {
      if (value > 8) {
        value = 8;
        $scope.InputData.takenparts = 8;
      }
      $scope.takenpartsCount = value;
      var arrModels = [];
      for (var i=0; i< value; i++) {
        arrModels.push(i);
      }

      $scope.takenPartsModel = arrModels;
    }
  }

})

.controller('ClassPointSystemCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_points($scope.InputData.totalpoint,
                                         $scope.InputData.testpoint
                                         );
    console.log($scope.ResultData.result);
    if ($scope.ResultData.result){
      $rootScope.textFB = "ClassPointSystemCtrl facebook";
      $rootScope.textTW = "ClassPointSystemCtrl twitter";
      $rootScope.textEM = "ClassPointSystemCtrl mail";
      $scope.modal.show();
    }
  };
})

.controller('LowestGradeCtrl', function($scope, $ionicModal, $rootScope) {
  $scope.InputData = {};

  $scope.droppedtestCount = 0;
  $scope.droppedTestLabel =  ["Lowest test grade",
                              "2nd lowest test grade",
                              "3rd lowest test grade",
                              "4th lowest test grade",
                              "5th lowest test grade",
                              "6th lowest test grade",
                              "7th lowest test grade",
                              "8th lowest test grade"];

  $scope.doCalc = function() {
    $scope.ResultData.result = calc_dropped($scope.InputData.current,
                                         $scope.InputData.desired,
                                         $scope.InputData.testweight,
                                         $scope.InputData.takentest,
                                         $scope.InputData.testaverage,
                                         $scope.InputData.droppedtest,
                                         $scope.InputData.finalcounts,
                                         $scope.InputData.finalworth
                                         );
    console.log($scope.ResultData.result);
    if ($scope.ResultData.result){
      $rootScope.textFB = "LowestGradeCtrl facebook";
      $rootScope.textTW = "LowestGradeCtrl twitter";
      $rootScope.textEM = "LowestGradeCtrl mail";
      $scope.modal.show();
    }
  };

  $scope.OnCountChange = function() {
    var value = $scope.InputData.droppedtest;
    if (!isNaN(value)) {
      if (value > 8) {
        value = 8;
        $scope.InputData.droppedtest = 8;
      }
      $scope.droppedtestCount = value;
      var arrModels = [];
      for (var i=0; i< value; i++) {
        arrModels.push(i);
      }

      $scope.lstTestModel = arrModels;
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
