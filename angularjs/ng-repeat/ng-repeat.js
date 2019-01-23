(function () {

    var app = angular.module('myApp', []);

    app.controller('PhoneListController', function ($scope) {

        $scope.phones = [
            {
                name: 'Apple Iphone X',
                snippet: 'Technology of the future.'
            }, {
                name: 'Samsung Galaxy 9',
                snippet: 'The camera. Reimagined.'
            }, {
                name: 'Nokia 7 Plus',
                snippet: 'Beatuy in strength.'
            }

        ];

    });


})();