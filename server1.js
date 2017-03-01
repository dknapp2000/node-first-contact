var http = require( "http" );
var PORT = 7000;

const goodStuff = [
    "G'day mate", "You look well today", "Running out of nuce things to say. . ."
]
function handleRequest( request, response ) {
    let ix = Math.floor(Math.random() * goodStuff.length );
    response.end("Server says: " + goodStuff[ix])
}

var server = http.createServer( handleRequest );

server.listen(PORT, function() {
    console.log( "server listening on : " + PORT );
});
