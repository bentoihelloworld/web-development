(function () {

    var mainApp = angular.module("myApp", []);

    mainApp.service('greetingService',function(){

        this.greet = "Welcome to AngularJS";
    });


    
    mainApp.controller("helloController", function ($scope, greetingService) {
        $scope.message = greetingService.greet;
    });

    

})();
// IIFE - immediately invoked function expression - to avoid global variables
// and isolate scopes


// (function(){})();