var http = require( "http" );
var PORT = 7500;

var badStuff = [
    "Gumba!", "Slacker", "Bone head", "Do you have a brain?" 
]
function handleRequest( request, response ) {
    let ix = Math.floor(Math.random() * badStuff.length );
    response.end("The server says: " + badStuff[ix] );
}

var server = http.createServer( handleRequest );

server.listen(PORT, function() {
    console.log( "server listening on : " + PORT );
});
