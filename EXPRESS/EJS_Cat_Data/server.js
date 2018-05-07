var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));

// set "views" folder and tell express that ejs templating will be used.
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

// Keep your index.html file in the static directory. 
// It should render even when your server does not explicitly handle the '/' route

app.get("/cats", function(request, response){
    response.render('cats');
});

app.get("/cars", function(request, response){
    response.render('cars');
});

app.get('/cars/new', function(request, response){
  response.render("form");
});

// set constructor for cat objects.
class Cat{
	constructor( name, age, color, sleepSpots, id){
		this.name = name;
		this.age = age;
		this.color = color;
    this.spots = sleepSpots;
    this.id = id;
	}
}

//routes for cat detail pages.  Includes sleepSpots array for each cat and cat instance creation.
app.get('/detail/cat3', function (request, response){
  var sleepSpots3 = ['In a sunny spot', 'On a tree branch', 'On the rocking chair'];
  const cat = new Cat('Lilu', 7, "Black", sleepSpots3, "cat3");
  response.render("details", {cat});
});

app.get('/detail/cat2', function (request, response){
  var sleepSpots2 = ['On the back deck', 'On the window sill', 'Underneath the couch'];
  const cat = new Cat('Violet', 10, "Tabby", sleepSpots2, "cat2");
  response.render("details", {cat});
});

app.get('/detail/cat1', function (request, response){
  var sleepSpots1 = ["Hood of the car", 'Box on the stairs', 'Back of the couch'];
  const cat = new Cat('David', 2, "Tabby & White", sleepSpots1, "cat1");
  response.render("details", {cat});
});
  

// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})