EJS Cat Data
In this assignment, we are going to focus on displaying data about our particular cats.

As before, when we navigate to localhost:8000/cats, we should see pictures of all our cats. 
This time, when we click the pictures, they will navigate us to a unique route in the server. 
This route may be hardcoded for now.

For each of the cat's route, serve the same template, details.ejs. 
However, each route should send different data to the template so that the page is customized for each cat. 
Again, this data may be hardcoded in the server since we do not have a database yet. 
Include at least one array in the cat's data so that you may practice iterating over an array in the template.

Create an application that shows all the cats on /cats and make all the images clickable
Clicking an image of a cat should navigate to a unique route in the server, which may be hardcoded
Each of the cat's unique routes should render the same template and pass it data about that cat. This data may be hardcoded in the server.
Display the data about the cat in the template
Include at least one array in the cat's data and iterate over it in the template with ejs