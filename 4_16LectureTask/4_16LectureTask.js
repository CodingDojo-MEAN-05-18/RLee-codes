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
            setTimeout( function() {console.log(`Received ${item.product}, time to ${item.directions() }`)}, 3000  );
            //wrapped the console log in an anonymous function and passed into setTimeout()
		}else{
			console.log(`Received ${item.product}, time to ${item.directions()}`);
		}
	}
	
	
	orderSupplies('paint', receivedItem);
	orderSupplies('brush', receivedItem);

	
	
	
	
	//