angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

   .state('menu.order', {
    url: '/pageOrder',
    views: {
      'side-menu21': {
        templateUrl: 'templates/order.html',
        controller: 'orderCtrl'
      }
    }
  })

  .state('menu.report', {
    url: '/pageReport',
    views: {
      'side-menu21': {
        templateUrl: 'templates/report.html',
        controller: 'reportCtrl'
      }
    }
  })

  .state('menu.payment', {
    url: '/pagePayment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
      }
    }
  })
  
    .state('menu.paymentHistory', {
    url: '/pagePayment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paymentHistory.html',
        controller: 'paymentHistoryCtrl'
      }
    }
  })
  
    .state('menu.summary', {
    url: '/pagePayment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/summary.html',
        controller: 'summaryCtrl'
      }
    }
  })
  
    .state('menu.orderDetails', {
    url: '/pagePayment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orderDetails.html',
        controller: 'orderDetailsCtrl'
      }
    }
  })

  .state('menu.cart', {
	cache: false,
    url: '/pageCart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.signInOut', {
    url: '/pageSign',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signInOut.html',
        controller: 'signInOutCtrl'
      }
    }
  })
  
  .state('menu.orderMenu', {
    url: '/pageOrderMenu',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orderMenu.html',
        controller: 'orderMenuCtrl'
      }
    }
  })

  .state('signUp', {
    url: '/pageSignUp',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/pageSignUp')

  

});