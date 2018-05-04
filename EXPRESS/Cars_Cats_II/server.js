var express = require('express');
var app = express();

//For this assignment, you will need a static directory. You will not need ejs nor a views directory.
//tell app to use the static directory
app.use(express.static(__dirname + "/static"));

// app.get('/', function(request, response) {
// response.send('<h1>Hello Express</h1>');
// })

// set the app to listen on port 8000
app.listen(8000, function() {
  console.log('listening on port 8000');
})