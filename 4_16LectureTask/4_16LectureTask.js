function orderSupplies(item, callback) {
	  let warehouse; //undefined
	  const deliveryTime = Math.random() * 3000;
	
	  setTimeout(function() {
	    warehouse = {
	      paint: {
	        product: 'Neon Green Paint',
	        directions: function() { return 'mix it!' }
	      },
	      brush: {
	        product: 'Horsehair brush',
	        directions: function() { return 'start painting!' }
	      }
	    };
	
	    callback(warehouse[item]);
	  }, deliveryTime);
	}
	
	function receivedItem(item) {
		if (item.product == "Horsehair brush"){
            setTimeout( console.log(`Received ${item.product}, time to ${item.directions() }`), 3000  );
            //this def isn't working, but I'm not clear why "call back argument must be a function"
		}else{
            // console.log (item.product);
			console.log(`Received ${item.product}, time to ${item.directions()}`);
		}
	}
	
	
	orderSupplies('paint', receivedItem);
	orderSupplies('brush', receivedItem);
    
    //setTimeout(orderSupplies('brush', receivedItem), 3000);  
    //this throws a typeError stating that "callback" argument must be a function. 
    //Seems that received item becomes out of scope if I use the above method.
	
	
	
	
	//