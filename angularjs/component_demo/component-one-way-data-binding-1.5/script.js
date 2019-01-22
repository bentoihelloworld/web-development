//1. create a function for component 
var example = {
    bindings: {
        obj: '=' //2 way binding
    },
    //create a template to access the controller object using default $ctrl
    template: `
    <div class="section">
      <h4>
        Isolate | Child  Component
      </h4>
      <p>Object: {{ $ctrl.obj }}</p>
      <a href="" ng-click="$ctrl.updateValues();">
        Change Isolate Values
      </a>
    </div>
  `,
  //create updateValue function inside controller where object properties for age and location are updated.
    controller: function () {
        this.updateValues = function () {
            this.obj = {
                john: {
                    age: 35,
                    location: 'From component'
                }
            };
        };
    }
};

//2. create a function for parent controller
var ParentController = function () {
    this.someObject = {
        todd: {
            age: 25,
            location: 'Default parent'
        }
    };
    this.updateValues = function () {
        this.someObject = {
            jilles: {
                age: 20,
                location: 'From updated parent'
            }
        };
    };
}


//3.define the angular module and call component and controller
angular
    .module('app', [])
    .component('example', example)
    .controller('ParentController', ParentController);
