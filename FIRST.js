var http = require('http');
var dt=require('./FirstModule');

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.write("the date an time " + dt.mydatetime());
	res.end("welcome to homepage");
}).listen(8080);
