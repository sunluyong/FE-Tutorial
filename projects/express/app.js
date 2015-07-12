var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	var callback = req.query.callback || 'callback';
	res.set('Content-Type', 'text/javascript');
	res.send(callback + "([{name: 'Book 1'},{name: 'Book 2'},{name: 'Book 3'},{name: 'Book 4'},{name: 'Book 5'}]);");
});

var server = app.listen(3001, '127.0.0.1', function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
