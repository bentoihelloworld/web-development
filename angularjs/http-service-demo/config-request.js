(function () {

    var app = angular.module('myApp', []);

    app.controller('httpConfigController', function ($scope, $http) {
       
       $scope.post = function (payload) {

            // var data = {
            //     "enterpriseId": "niko.d.jesus",
            //     "firstName": "Niko",
            //     "position": "Architect"
            // };

            var config = {
                method: "POST",
                url: "http://localhost:8081/restfulwebservice/employee/create",
                data: JSON.parse(payload)
            };

            var onUserComplete = function () {
                getList()
            };

            var onError = function () { $scope.error = "failed to submit data"; };

            $http(config).then(onUserComplete, onError);

           

        };

        var getList = function () {
         
            var config = {
                method: "GET",
                url: "http://localhost:8081/restfulwebservice/employee/list/all",
            };

            $http(config).then(function (response) {
                $scope.user = response.data;
            }, function () {
                $scope.error = "Could not get response from server";
            });
        }
        //call post function
        // post();

        getList()

    });


})();