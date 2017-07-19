angular.module('app.services', [])
.service('BlankService', [function(){

}])
.factory('OrderFactory', [function()
{
	var OrderFactory={};
	var option2;
	return OrderFactory;
}])
.factory('BlankFactory', [function(){

}])
.service('CartService', [function(win) {
   var cart = [];
    var check;
   return {
      get_cart: function() {
         return cart;
      },
      store_cart: function (item) {
		   check=false;
		  	for(var i=0;i<cart.length;i++)
			{
				if(cart[i].name===item.name)
				{
					item.cost=item.quantity * item.price;
					cart[i]=item;
					check=true;
					break;
					//alert("MATCHED: "+JSON.stringify(cart));
					
				}
				
				
			}
			if(!check)
			{
				item.cost=item.quantity * item.price;
				cart.push(item);
			}
          
          //alert(JSON.stringify(cart));
      }
   }
}]);