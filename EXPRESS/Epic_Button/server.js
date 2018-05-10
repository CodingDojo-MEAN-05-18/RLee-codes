const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

//setup ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

//setup static folder
app.use(express.static(path.join(__dirname, 'static')));

//set counter variable & default to 0
let counter = 0;


// connect socket and setup listeners
const io = require("socket.io")(server);
io.on('connection', socket => {
    console.log(`Socket is connected and listening on port: ${port}`);

    // listen for button click event from client, increment count, and send updated count to client.
    socket.on("buttonClick", function(){
        io.emit('incremented', ++counter);
    });

    // listen for reset event, reset the counter, and send updated count to client.
    socket.on("reset", function(){
        counter = 0;
        io.emit('zeroed', counter);
    });

    //emit current counter value to new users on connection
    socket.emit("incremented", counter);
});

//display index.ejs
app.get('/', function(req, res){
    res.render('index');
});
