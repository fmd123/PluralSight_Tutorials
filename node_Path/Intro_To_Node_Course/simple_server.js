var http = require("http");
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end("Hello World, it's me\n")
}).listen(1337)

console.log("server is listening on port 1337")
