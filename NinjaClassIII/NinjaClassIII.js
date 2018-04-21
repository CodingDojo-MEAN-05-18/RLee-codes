//recreate the ninja class from scratch using es6 classes
class Ninja {
	constructor(name, speed=3, strength=3, health=100){
	// private variables
		const self = this;

		this.speed = speed;
		this.strength = strength;
		this.name = name;
		this.health = health;
		
	// The Ninja class should have the following methods:
	// sayName() - This should log that Ninja's name to the console.
	// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
	// drinkSake() - This should add +10 Health to the Ninja
	// methods
		this.sayName = function(){
			console.log(`My ninja name is ${this.name}`);
		};
		this.showStats = function(){
			console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
		};
		this.drinkSake = function(){
			let oldHealth = this.health;
			this.health += 10;
			console.log(`${this.name} takes a drink of sake and gains ten health from ${oldHealth} to  ${this.health}`);
		};
	}
}


// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by
// default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
// Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, 
// before console.logging a wise message.
class Sensei extends Ninja {
	constructor(name, speed=10, strength=10, health=200, wisdom=10){
	// call super class to build parent attributes
		super(name, speed, strength, health);
			this.wisdom = wisdom;
	
	
	//child class Sensei specific method
		this.speakWisdom = function(){
		this.drinkSake();
	//took just a sec to allow random expressions of widsom instead of one constant saying
		let choice = Math.round(Math.random()*2);
		let sayings = ["Be water, my friend.","What one programmer can do in one month, two programmers can do in two months.","A master can teach many things. But the most important lesson for a ninja is to learn oneself."];
		let speak = sayings[choice];
		console.log(speak);
	};
	}
}

// basic Ninja test case
const pupil = new Ninja('Raphael');

// Master Splinter test case (required)
const superSensei = new Sensei("Master Splinter");

// Wisdom stat is not shown because it is not a part of the prototype's showStats method.
superSensei.showStats();

//Random selection of 1 of 3 messages of wisdom shown when speakWisdom is invoked  (dirnkSake also called from super.)
superSensei.speakWisdom();
