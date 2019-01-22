(function () {

    var app = angular.module('myAppModule',[]);

    app.component("output",{
      bindings: { out: '&' },
      template: `
        <button ng-click="$ctrl.out({amount: 1})">buy one</button>
        <button ng-click="$ctrl.out({amount: 5, test: 200})">buy many</button> `
    });
})();

