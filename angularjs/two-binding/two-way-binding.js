(function(){

    var app = angular.module('myApp',[]);

    app.controller('greetingsController', function($scope){

        $scope.greetings= "Hello world";
        $scope.update = function(inputValue){
            $scope.greetings =inputValue;
        };

    });

})();