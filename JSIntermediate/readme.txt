Assignment: JavaScript Intermediate
Complete the following challenges. All of your code should be in one HTML file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!

Part I
Create a function called starString() that takes a number and returns a string of that many *. For example:

let stars = starString(8)
If we console.log(stars) we should see ******** printed in our terminal.

Part II
Create a function called drawStars() that takes an array of numbers and prints out *.

let x = [4, 6, 1, 3, 5, 7, 25]
drawStars(x) should print the following in when invoked:

****
******
*
***
*****
*******
*************************
Part III
Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.

For example:

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x) should print the following in the terminal:

****
ttt
*
mmmmmmm
*****
*******
jjjjjjjjjjj