Assignment: Ninja Class II
Complete the below challenges using the Ninja Class from the previous assignment. You may skip the functionality related
to private variables.

.punch()
Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health
from the Ninja we passed in. Your .punch() should display a console message like the below example.

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

.kick()
Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling 
Ninja has, and like .punch() will take another Ninja instance.

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"

Validations
Update .punch() and .kick() so that they only accept Instances of the Ninja class. Hint: You will need to find a way to
check the constructor of an instance. You will often need to consult outside documentation to find solutions for 
particular features.