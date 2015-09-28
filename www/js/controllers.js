angular.module('starter.controllers', ['ti-segmented-control', 'chart.js'])

.controller('BudgetCtrl', function($scope) {

	$scope.buttonClicked = function(index){
		$scope.selectedIndex = index;
		$scope.$apply();
	}

	$scope.labels = ["Necessary Expenses", "Money Left"];
  	$scope.data = [750, 150];

})

.controller('Budget2Ctrl', function($scope) {

	$scope.buttonClicked = function(index){
		$scope.selectedIndex = index;
		$scope.$apply();
	}

	$scope.labels = ["Necessary Expenses", "Money Left", "Savings"];
  	$scope.data = [750, 350, 35];

})

.controller('Budget3Ctrl', function($scope) {

	$scope.buttonClicked = function(index){
		$scope.selectedIndex = index;
		$scope.$apply();
	}

	$scope.labels = ['Groceries', 'Restaurants', 'Entertainment', 'Guilty'];
 	$scope.series = ['Budgeted', 'Spent'];

 	$scope.data = [
    [150, 60, 25, 25],
    [105, 45, 20, 25]
  ];
})

.controller('ToolboxCtrl', function($scope) {

})

.controller('DreamsCtrl', function($scope, $rootScope, $ionicUser, $ionicPush, $log) {

	// Handles incoming device tokens
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token);
    $log.info('Ionic Push: Got token ', data.token, data.platform);
    $scope.token = data.token;
  });

 	 // Identifies a user with the Ionic User service
  	$scope.identifyUser = function() {
	    $log.info('Ionic User: Identifying with Ionic User service');

	    var user = $ionicUser.get();
	    if(!user.user_id) {
	      // Set your user_id here, or generate a random one.
	      user.user_id = $ionicUser.generateGUID();
	    };

	    // Add some metadata to your user object.
	    angular.extend(user, {
	      name: 'Ionitron',
	      bio: 'I come from planet Ion'
	    });

	    // Identify your user with the Ionic User Service
	    $ionicUser.identify(user).then(function(){
	      $scope.identified = true;
	      alert('Identified user ' + user.name + '\n ID ' + user.user_id);
	    });
	  };
  
  // Registers a device for push notifications and stores its token
  $scope.pushRegister = function() {
    $log.info('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        // $log.info(notification);
        return true;
      }
    });
  };
})

.controller('OnemonthCtrl', function($scope) {
  
})

.controller('ThreemonthsCtrl', function($scope) {
  
})

.controller('Toolbox2Ctrl', function($scope) {

})

.controller('Dreams2Ctrl', function($scope) {
 
})

.controller('Toolbox3Ctrl', function($scope) {

})

.controller('Dreams3Ctrl', function($scope) {
 
});
