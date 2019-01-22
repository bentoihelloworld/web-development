  var app = angular.module('mainApp', []);

function createDirective(name){
  return function(){
    return {
      restrict: 'E',
      compile: function(tElem, tAttrs){
        console.log(name + ': compile is called');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(name + ': pre link is called');
          },
          post: function(scope, iElem, iAttrs){
            console.log(name + ': post link is called');
          }
        }
      },
      controller: function($scope, $element, $attrs){
         console.log(name + ': controller link is called');
      }
    }
  }
}

app.directive('levelOne', createDirective('levelOne'));
app.directive('levelTwo', createDirective('levelTwo'));
app.directive('levelThree', createDirective('levelThree'));



