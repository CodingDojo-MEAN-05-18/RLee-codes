function Ninja(name){
//private variables
	const self = this;
	const speed = 3;
	const strength = 3;

//attributes
	this.name = name;
	this.health = 100;

//methods
	this.sayName = function(){
		console.log(`My ninja name is ${this.name}!`);
	};
	this.showStats = function(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
	};
	this.drinkSake = function(){
		this.health += 10;
	};
	//Ninja Class II methods, punch & kick
	this.punch = function(otherNinja){
	// check if passed value is an instance of our Ninja class.
		if ( otherNinja instanceof Ninja == false){
			console.log("An honorable ninja would only hit another Ninja. Please adjust your target");
		}else{
			otherNinja.health -= 5;
			console.log(`${otherNinja.name} was punched by ${this.name} and lost 5 health!`)
		}
	};
	this.kick = function(otherNinja){
	// check if passed value is an instance of our Ninja class.
		if (otherNinja instanceof Ninja == false){
			console.log("An honorable ninja would only kick another Ninja.  Please adjust your target");
		}else{
			let hit = (strength * 15);
			otherNinja.health -= ( hit );
			console.log(`${otherNinja.name} was kicked by ${this.name} and lost ${ hit } health!`);
		}
	};


}


//Ninja Class II   (See readme.txt for requirements)
// create ninja instances
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");

// fail control cases for punch and kick methods
redNinja.punch("target");
blueNinja.kick(10);
console.log("--------------------------");

// call showStatus method to show baseline health
redNinja.showStats();
blueNinja.showStats();
console.log("--------------------------");
// Ninja Class II test cases
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
console.log("--------------------------");
// call showStatus method to show health after attacks.
redNinja.showStats();
blueNinja.showStats();

//  All tests passed.




// Test Cases from Ninja Class I
// const ninja1 = new Ninja("Hyabusa");

// //required test case
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!" => Passes

// //not a required test case, although the method is a part of the requirements. 
// //ninja1.drinkSake();
// //should add 10 to health  (can be checked by examining the Health value in the output of the following method.)  => Passes

// //required test case
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3" => Passes
