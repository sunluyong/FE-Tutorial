var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	var path = 'module1.js';
	fs.readFile(path, function(err, data){
		if(err){
			res.writeHead(500);
			res.write(err);
		}else{
			res.writeHead(200, {'Content-type': 'text/html'});
			res.write(data.toString());
		}
		res.end();
	});
;}).listen(3000);
