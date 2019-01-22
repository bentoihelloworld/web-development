//inject a ngWebSocket module 
var mainModule = angular.module('MyApp', ['ngWebSocket']);
//create a controller and inject the scope and websocket objects
mainModule.controller('MyCtrl', function ($scope, $websocket) {

  //open a websocket connection with the provided address
  var dataStream = $websocket('ws://127.0.0.1:1337');

  //call onOpen function which will be executed each time socket connection is established.
  dataStream.onOpen(function () {

    //use scope apply function - to listen if there is something change happened 
    $scope.$apply(function () {
      $scope.MyStatus = "Connection to Websocket has established." + "\n";
    });

    console.log("connected");
  });

//call onClose and use scope apply function to check the real status of your connections.
  dataStream.onClose(function () {
    $scope.$apply(function () {
      $scope.MyStatus = "Connection to Websocket is closed." + "\n";
    });
  });
});


