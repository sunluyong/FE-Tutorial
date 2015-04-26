//安装晚node后，在本文件所在目录执行命令
// node httpServer.js
// 文件路径（/Users/byron/test.html）需要改成自己目录对应的路径

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/html'});

	fs.readFile('/Users/byron/test.html', function (err, data) {
	  if (err) throw err;
	  res.end(data);
	});


}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
