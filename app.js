// app.js
// create angular app and inject ngAnimate and ui-router
// =================================================
angular.module('formApp',['ngAnimate','ui.router'])
// configuring our routes
// ===================================================
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    //route to our basic form(/form)
    .state('form',{
      url: '/form',
      templateUrl: 'form.html',
      controller: 'formController'
    })
    //nested routes
    //each of these sections will have their own view
    //url will be nested(/form/profile)

    .state('form.profile',{
      url: '/profile',
      templateUrl: 'form-profile.html'
    })

    // url will be /form/interests
    .state('form.interests', {
        url: '/interests',
        templateUrl: 'form-interests.html'
    })

    // url will be /form/payment
    .state('form.payment', {
        url: '/payment',
        templateUrl: 'form-payment.html'
    });
  //catch all route
  //send users to the form page
  $urlRouterProvider.otherwise('/form/profile');


})
 // our controller to the form data
  // ======================================================
.controller('formController', function($scope){
    // we will store all of our form data in this object
    $scope.formData  = {};

    //function to process form
    $scope.processForm = function(){
      alert('awesome')
    };
  });
