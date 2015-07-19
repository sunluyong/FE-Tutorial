var fs = require('fs');

// 读取文件信息
fs.stat('t2.js', function(err, stats){
	if(err){
		console.log(err);
	}

	console.log(stats);
	console.log(stats.isFile());
});

// 打开文件进行读写操作

fs.open('file.txt', 'w+', function(err, fd){

	// 向文件写内容
		var writeBuffer = new Buffer('这是要写入的字符串'),
				offset = 0,
				len = writeBuffer.length,
				filePostion = null;

	  fs.write(fd, writeBuffer, offset, len, filePostion, function(err, readByte){
			console.log('写数据总数：' + readByte + ' bytes' );
			fs.close(fd);
	  });
});

fs.open('file.txt', 'a+', function(err, fd){
		//读取文件信息
		var readBuffer = new Buffer(1024),
			offset = 0,
			len = readBuffer.length,
			filePostion = 0;

	  fs.read(fd, readBuffer, offset, len, 0, function(err, readByte){
			console.log('读取数据总数：' + readByte + ' bytes' );
	    console.log(readBuffer.slice(0, readByte).toString());
			fs.close(fd);
	  });
});

// 读取文件内容

fs.readFile('file2.txt', function (err, data) {
  if (err) throw err;
  //console.log(data);
});

// 写文件

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  fs.appendFile('message.txt', '\ndata to append', function (err) {
    if (err) throw err;
  });
});
