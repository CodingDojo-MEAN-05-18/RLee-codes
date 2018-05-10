// 1. Server loads index.ejs & updates newly connected user's "#wrapper" background color to the last
//     selected color.
// 2. Clicking one of the three color buttons emits a "colorChosen" event to the server along with the
//     selected color's value.
// 3. "colorChosen" event triggers an io.emit, "selection" which conveys the current color selection to
//     all connected users.
// 4. "selection" event triggers the update of the "#wrapper"'s background color to the selected color.


// require express
var express = require('express');
// create the express app
var app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

// path module
var path = require('path');

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//setting up socket.io and listeners
const io = require("socket.io")(server);

var shade = {};
io.on('connection', socket => {
    console.log(`Socket is connected and listening on port: ${port}`);
    // 1. Server loads index.ejs & updates newly connected user's "#wrapper" background color to the last
    //     selected color.
    socket.emit("newly_Connected", shade);

// 3. "colorChosen" event triggers an io.emit, "selection" which conveys the current color selection to
//     all connected users.
    socket.on("colorChosen", function(color){
        shade = color;
        io.emit("selection", color); 
    });
});

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render('index');
});
