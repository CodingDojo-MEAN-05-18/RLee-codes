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


}




const ninja1 = new Ninja("Hyabusa");

//required test case
ninja1.sayName();
// -> "My ninja name is Hyabusa!" => Passes

//not a required test case, although the method is a part of the requirements. 
//ninja1.drinkSake();
//should add 10 to health  (can be checked by examining the Health value in the output of the following method.)  => Passes

//required test case
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3" => Passes
