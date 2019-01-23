(function () {

    var app = angular.module('myApp', []);

    app.controller('MainCtrl', function ($scope, $q, $http) {

        $scope.name = "Name: ";

        var getname = function () {
            var deferred = $q.defer();

            setTimeout(function () {

                $http.get("https://api.github.com/users/robconery").then(function (response) {
                    deferred.resolve(response.data);
                }, function () {
                    deferred.reject("failed to get name from service");
                });

            }, 1000);

            return deferred.promise;
        };

//call the function getname and handle the responses
        getname().then(function(rest){
                $scope.response = rest;

        }, function(fallback){
                $scope.response = fallback + "!";

        });


    });






})();