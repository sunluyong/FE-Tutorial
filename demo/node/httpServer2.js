//安装node后，在本文件所在目录执行命令
// node httpServer2.js

var http = require('http');

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/html'});

	var i = 0;
	var timerId = setInterval(function(){
		if(i++ > 100){
			clearInterval(timerId);
			res.end('done');
		}else{
			res.write(i + '\t');
		}
	}, 100);

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
