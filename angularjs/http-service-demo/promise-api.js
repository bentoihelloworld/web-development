(function () {

    var app = angular.module('myApp', []);

    app.controller('MainCtrl', function ($scope, $http) {

        //success callback
        var onUserComplete = function (response) {
            $scope.response = response.data;
        };

        //error callback
        var onError = function () {
            $scope.response = "Could not fetch user info";
        };

        $http.get("https://api.github.com/users/robconery").then(onUserComplete, onError);
    });


})();