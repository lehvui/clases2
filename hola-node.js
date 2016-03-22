var http = require("http")
var port = 8180;

function handle_request(request, response){
	response.writeHead(200,{
		"content-type" : "text/plain"
	});

	response.end("Hola Mundo. Empieza restful\n");
	console.log("petición");
}

http.createServer(handle_request).listen(port, "127.0.0.1");
console.log("iniciando server http node.js en http://127.0.0.1:" + port);