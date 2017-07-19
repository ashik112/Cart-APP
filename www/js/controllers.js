angular.module('app.controllers', ['ionic'])
  
.controller('orderCtrl', ['$scope', '$stateParams','OrderFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, OrderFactory) 
{
	$scope.order=OrderFactory;
	$scope.option = function(optionName)
	{
			$scope.order.option2=optionName;
	}
	


}])

.controller('orderMenuCtrl', ['$scope', '$state','$stateParams','OrderFactory','CartService','$ionicModal',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$state, $stateParams, OrderFactory,CartService,$ionicModal) 
{
	/*SHOW IMAGE FULLSCREEN*/
	$ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(index) {
      switch(index) {
        case 1:
          $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';
          break;
        case 2:
          $scope.imageSrc  = 'http://ionicframework.com/img/ionic_logo.svg';
          break;
        case 3:
          $scope.imageSrc  = 'http://ionicframework.com/img/homepage/phones-weather-demo@2x.png';
          break;
      }
      $scope.openModal();
    }
	/*WND OF SHOW IMAGE FULLSCREEN*/
	
	$scope.options = [0,1,2,3,4,5,6,7,8,9,10];
	$scope.total=0;
	$scope.title=OrderFactory.option2;
	$scope.items = 
	[
	
		{
			"name": "Rice",
			"price": 100
		},
		{
			"name": "Fish",
			"price": 210
		},
		{
			"name": "Chicken",
			"price": 160
		}
	
	];
	
	$scope.selectedItems = [];
	for(var i=0;i<$scope.items.length;i++)
	{
		$scope.selectedItems.push($scope.items[i]);
		$scope.selectedItems[i].quantity=0;
	}
	//alert(JSON.stringify($scope.selectedItems));
	
	$scope.goToCart=function()
	{
		//$state.go('menu.cart');
	}
	$scope.addToCart=function()
	{
		//var temp=CartService.cart;
	//	CartFactory.items=$scope.selectedItems;
		
		//alert(JSON.stringify(temp));
		for(var i=0;i<$scope.selectedItems.length;i++)
		{
			
			if($scope.selectedItems[i].quantity!=0)
			{
				CartService.store_cart($scope.selectedItems[i]);
			}
			
		}
		window.plugins.toast
			.show("Added to the Cart", 'short', 'center')
			.then(function(success) {
			  console.log('Success');
			}, function (error) {
			  console.log('Error');
			});
		//alert(JSON.stringify(CartFactory.cart));
		//alert("clicked");
		//alert(JSON.stringify(CartFactory.items));
	}
	
	/*
		Calculates Total Price 
	*/
	$scope.updateTotal=function()
	{		
		$scope.total=0;
		for(var i=0;i<$scope.selectedItems.length;i++)
		{
			$scope.total=($scope.selectedItems[i].quantity*$scope.selectedItems[i].price)+$scope.total;
		}
	
	}
	

}])
   
.controller('reportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('orderDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('paymentHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('summaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartCtrl', ['$scope', '$stateParams','CartService','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, CartService,$ionicPopup) 
{
	$scope.options = [1,2,3,4,5,6,7,8,9,10];
	$scope.items=CartService.get_cart();
	$scope.total=0;
	for(var i=0;i<$scope.items.length;i++)
	{
		$scope.total=($scope.items[i].cost)+$scope.total;
	}
	$scope.updateCart=function()
	{
		$scope.total=0;
		for(var i=0;i<$scope.items.length;i++)
		{
			
			if($scope.items[i].quantity!=0)
			{
				CartService.store_cart($scope.items[i]);
				$scope.total=($scope.items[i].cost)+$scope.total;
			}
			
		}
		$scope.items=CartService.get_cart();
	}
	$scope.removeItem=function(index)
	{
		//alert(index);
		$scope.items.splice(index, 1);
		//alert(JSON.stringify(CartService.get_cart()));
		$scope.total=0;
		for(var i=0;i<$scope.items.length;i++)
		{
			$scope.total=($scope.items[i].cost)+$scope.total;
		}
	}
	
	$scope.confirmOrder=function()
	{
		$ionicPopup.confirm({
					title: 'Confirmation',
					content: 'Are you sure?'
				})
				.then(function(result) {
				if(result) {
					//ionic.Platform.exitApp();
					 window.plugins.toast
					.show("Thank You!", 'short', 'center')
					.then(function(success) {
					  console.log('Success');
					}, function (error) {
					  console.log('Error');
					});
				}
			});
	}
	//alert(JSON.stringify($scope.items));
    /*function add(index) {
        window.alert("Added: " + index);
    }*/


}])
   
.controller('signInOutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signUpCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) 
{
	$scope.areas=["Gulshan", "Banani", "Mirpur", "Badda", "Rampura"	];
	
	$scope.signUp=function(input)
	{
		var phone=input.phone+"";
		console.log(phone.length+"");
		if(input.name&&input.phone&&input.area)
		{
			
			if(phone.length>11||phone.length<10)
			{
				try
				{
					window.plugins.toast
					.show("Invalid Phone Number", 'short', 'bottom')
					.then(function(success) {
					  console.log('Success');
					}, function (error) {
					  console.log('Error');
					});
				}
				catch(error)
				{
					
				}
			}
			else
			{
				$state.go("menu.order");
			}
			
		}
		else
		{ 	
			
			window.plugins.toast
			.show("Please fill required fields", 'short', 'bottom')
			.then(function(success) {
			  console.log('Success');
			}, function (error) {
			  console.log('Error');
			});
		}
	}


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 