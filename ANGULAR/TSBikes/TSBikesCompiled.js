var Bike = (function () {
    function Bike(price, max_speed) {
        var _this = this;
        this.price = price;
        this.max_speed = max_speed;
        this.displayInfo = function () {
            console.log("The bike's max speed is " + _this.max_speed + ", its price was " + _this.price + ", and its current mileage is " + _this.miles + ".");
            return ("The bike's max speed is " + _this.max_speed + ", its price was " + _this.price + ", and its current mileage is " + _this.miles + ".");
        };
        this.ride = function () {
            console.log("riding...");
            _this.miles += 10;
            return _this;
        };
        this.reverse = function () {
            console.log("reversing...");
            _this.miles -= 5;
            if (_this.miles < 0) {
                _this.miles = 0;
            }
            return _this;
        };
        this.miles = 0;
    }
    return Bike;
}());

//create bike instances
var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(350, "30mph");
var bike3 = new Bike(375, "33mph");

//Have the first instance ride three times, reverse once and have it displayInfo().
bike1.ride().ride().ride().reverse().displayInfo();

//Have the second instance ride twice, reverse twice and have it displayInfo().
bike2.ride().ride().reverse().reverse().displayInfo();

//Have the third instance reverse three times and displayInfo().
bike3.reverse().reverse().reverse().displayInfo();
