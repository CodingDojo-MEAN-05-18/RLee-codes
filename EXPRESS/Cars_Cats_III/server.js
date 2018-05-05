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
})

app.get("/cars", function(request, response){
    response.render('cars');
})

app.get('/cars/new', function(request, response){
  response.render("form");
})

// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})