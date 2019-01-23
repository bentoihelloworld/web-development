(function () {

    var app = angular.module('myAppModule',[]);

    app.component("output",{
      bindings: { out: '&' },
      template: `
        <button ng-click="$ctrl.out({name: 'Melvin'})">Display Name</button>
      
 `
    });
})();

