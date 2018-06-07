// 1. SETTING TYPES
var myString: number;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
    //The problem is that the data type of the value being assigned does not match the previously declared type for the variable.
    //This can be fixed by changing the declared type to 'number'.  ...which has been done above.
myString = 9;

// 2. SETTING TYPES FOR FUNCTION PARAMETERS
function sayHello(name: number){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
    //The problem is that the data type of the value being passed into the function dooes not match the previously declared type for the variable.
    //This can be fixed by changing the declared type to 'number'. ...which has been done above.
 console.log(sayHello(9));
 
//3. Optional Parameters
function fullName(firstName: string, lastName: string, middleName?: string){
    if (middleName){
        let fullName = `${firstName} ${middleName} ${lastName}`;
    }else{
        let fullName = `${firstName} ${lastName}`;
    }
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
    //the function body must be altered to check the presence of optional parameters before procedeing.
    //also a ? must be appended to the end of the variable name which should be optional
 console.log(fullName("Jimbo", "Jones"));
 
 //4.  INTERFACES AND FUNCTION PARAMETERS
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
     //The problem was that there was a typo in the word "belts" on line 54.  The 's' had been omitted.
 console.log(graduate(jay));

//5. CLASSES AND FUNCTION PARAMETERS
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName?: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:  
    //must use "new" when creating a class instance
    //must make 'lastName' optional since shane has no last name shown.
    //must pass appropriate values to the constructor.
 const shane = new Ninja( 'shane' );


 // Since I'm having trouble making an instance of Ninja, I decided to do this:
    // this does not create an instance of our Ninja class.  Instead creates an object named 'turing'
 //const turing = {
    //fullName: "Alan Turing", this portion is unnecessary since fullName is built when the instance is created.
    //firstName: "Alan",
    //lastName: "Turing"
 //}
 const turing = new Ninja('Alan', 'Turing');
 //the above is the appropriate syntax to create the turing instance of our Ninja class. 

 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
    //this wasn't working, because the earlier created object "turing" wasn't an instance of our class, Ninja.
    //now that turing is a proper Ninja, this works.
 console.log(study(turing));
 
 //6. ARROW FUNCTIONS

 var increment = x => x + 1;
// This works great:
console.log(increment(3));

var square = x => (x * x);
// This is not showing me what I want:
    //This was not working becauase {} were used instead of ().  Now that they have been replaced, it works.
console.log(square(4));

// This is not working:
    //this was not working because there were no () around the parameters being passed to the function.
        //now that they have been supplied, it works.
var multiply = (x,y) => x * y;

// Nor is this working:
    //This was not working because there were no {} around the function body.
        //Now that they have been supplied, it works. 
var math = (x, y) => {let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}

// 7. ARROW FUNCTIONS AND 'THIS'
class Elephant {
    birthday: any;
    constructor(public age: number) {
        this.birthday = () =>{
           return (++this.age);
        }
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// age didn't chance because the {} following the constructor did not enclose the logic for the class creation.
// also, the birthday property had not been declared for the elephant class.