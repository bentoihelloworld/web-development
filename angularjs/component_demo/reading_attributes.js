(function () {

    var app = angular.module('myAppModule',[]);

    app.component('ourComponent', {
      // Binds the attibute data to the component controller.
      bindings: {
        data: '@'
      },
    
      // We can now access the data from the data attribute with `$ctrl`
      template:'<h1>{{ $ctrl.data }}</h1>'
    });
})();