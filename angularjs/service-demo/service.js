(function () {
    
    var mainApp = angular.module('mainApp', []);
//factory service
    mainApp.factory('MathService', function () {
        var factory = {};

        factory.mutiply = function (a, b) {
            return a * b;
        }
        return factory;

    });
    
//service 
    mainApp.service("CalculatorService", function (MathService) {
        this.square = function (a) {
            return MathService.mutiply(a, a);
        };
    });

//controller
    mainApp.controller('CaculatorController', function ($scope,CalculatorService) {
        $scope.result = "0";
        $scope.square= function(){
            $scope.result = CalculatorService.square($scope.number);

        };
      

    });


})();