
var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request,
     response){
    
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    
    
    // send root route to cars/new
    if(request.url === '/') {
        request.url = "cars/new";
    }
    
    // serve view for cars/new
    if(request.url === 'cars/new') {
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    
    //handle stylesheet request.
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('stylesheets/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    //serve cat images
    else if(request.url === '/images/cat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile(catServe(), function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }


    //serve car images
    else if(request.url === '/images/car.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile(carServe(), function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

//helper function selects a random cat to display
function catServe(){
    let choice = Math.round(Math.random()*2)+1;
    let cat = `images/cat${choice}.jpg`;
    return cat;
}

// helper function selects a random car to display
function carServe(){
    let choice = Math.round(Math.random()*2)+1;
    let cat = `images/car${choice}.jpg`;
    return cat;
}

// tell your server which port to run on
const port = 7077;
server.listen(port);

// print to terminal window
console.log(`Running in localhost at port ${port}`);



