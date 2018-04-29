module.exports = function() { 
    return {
        add: function(x, y){
            if (typeof x == "number" && typeof y == "number"){
                return(x + y);    
            }else{
                console.log ("Inputs must be numbers.");
                return;
            }
            
        },
        multiply: function(x, y){
            if (typeof x == "number" && typeof y == "number"){
                return(x * y);    
            }else{
                console.log ("Inputs must be numbers.");
                return;
            }
        },
        square: function(x){
            if (typeof x == "number"){
                return(x * x);    
            }else{
                console.log ("Input must be a number.");
                return;
            }
        },
        random: function(x, y){
            if (typeof x == "number" && typeof y == "number"){
                if (x >= y){
                    console.log("Initial argument must be < Second arguement")
                    return;
                }else{
                    var done = false;
                    while( done == false){
                        let step = Math.round(Math.random()*y);
                        if (step >= x && step <= y){
                            return step;
                        }
                    }
                }
            }else{
                console.log ("Inputs must be numbers.");
                return;
            }
        }
    }
}