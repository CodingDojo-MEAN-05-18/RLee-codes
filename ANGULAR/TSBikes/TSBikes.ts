class Bike {
    public miles: number;
    public displayInfo = () => {
        //console.log(`The bike's max speed is ${this.max_speed}, its price was ${this.price}, and its current mileage is ${this.miles}`.);
        return (`The bike's max speed is ${this.max_speed}, its price was ${this.price}, and its current mileage is ${this.miles}.`);
    };
    public ride = () => {
        document.write("riding...");
        this.miles += 10;
        return this;
    };
    public reverse = () => {
        document.write("reversing...");
        this.miles -= 5;
        if (this.miles < 0) {
            this.miles = 0;
        }
        return this;
    };
    constructor(
        public price: number,
        public max_speed: string,
    ){
        this.miles = 0;
    }
}

//create bike instances
var bike1 = new Bike(200, "25mph")
var bike2 = new Bike(350, "30mph")
var bike3 = new Bike(375, "33mph")

//Have the first instance ride three times, reverse once and have it displayInfo().
bike1.ride().ride().ride().reverse().displayInfo();

//Have the second instance ride twice, reverse twice and have it displayInfo().
bike2.ride().ride().reverse().reverse().displayInfo();

//Have the third instance reverse three times and displayInfo().
bike3.reverse().reverse().reverse().displayInfo();