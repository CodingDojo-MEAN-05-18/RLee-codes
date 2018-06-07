
//creating the bike class
class Bike {
    public miles: number;
    constructor(
        public price: number,
        public max_speed: string,
    ){
        this.miles = 0;
    }
}

//declaring Bike instances
let bike1 = new Bike(200, "25mph")
let bike2 = new Bike(350, "30mph")
let bike3 = new Bike(375, "33mph")

