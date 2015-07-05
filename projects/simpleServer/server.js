var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var query = url.parse(req.url).query;
	console.log(query);
	res.writeHead(200, {'Content-Type': 'text/html', 'PowerBy': 'Node'});
	if(query && query.indexOf('a')){
		res.write('OK');
	}else{
		res.write('Bad');
	}
	res.end();
}).listen(3000, '127.0.0.1');
