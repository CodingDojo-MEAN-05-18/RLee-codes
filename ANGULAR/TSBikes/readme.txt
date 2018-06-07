TypeScript Bikes - OOP
Objectives:
Refresh your object oriented programming skills
Practice your supercharged JavaScript with TypeScript

Using the TypeScript Playground tool, create a new class called Bike with the following 
properties/attributes:

price
max_speed
miles
Create 3 instances of the Bike class.

Use the constructor() function to specify the price and max_speed of each instance 
(e.g. let bike1 = new Bike(200, "25mph") ); 
(e.g. let bike2 = new Bike(350, "30mph") );
(e.g. let bike3 = new Bike(375, "35mph") );
Also write the code so that the initial miles is set to be 0 whenever a new instance is created.

Add the following functions to this class:

displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...

Have the first instance ride three times, reverse once and have it displayInfo(). 
Have the second instance ride twice, reverse twice and have it displayInfo(). 
Have the third instance reverse three times and displayInfo().

What would you do to prevent the instance from having negative miles?
    ** A check could be added to the "reverse" method before logging the result that 
    ** if miles < 0, then miles = 0.

Which methods can return this in order to allow chaining methods?
    ** ride and reverse should return 'this' to allow chaining.

For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.