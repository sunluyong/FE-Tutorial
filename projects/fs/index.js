var fs = require('fs');

// 创建文件夹

console.log(Date.now());
fs.mkdir('t1', function(err){
	if(err){
		console.log(err);
	}else{
		console.log(Date.now());
	}
});

console.log('========' + Date.now() + '==========');


fs.mkdirSync('t2');

console.log('========' + Date.now() + '==========');


// 删除文件夹

fs.rmdir('t1', function(){
	console.log('delete forder t1');
})

fs.rmdirSync('t2');

// 读取文件夹

if(fs.existsSync('t3')){
	var files = fs.readdirSync('t3');
	for(var i = 0; i < files.length; i++){
		fs.rmdirSync('t3/' + files[i]);
	}
	fs.rmdirSync('t3');
}

fs.mkdir('t3', function(err){
	if(err){
		console.log(err);
	}else{

		fs.mkdirSync('t3/t3-1');
		fs.mkdirSync('t3/t3-2');

		fs.readdir('t3', function(err, files){
			console.log(files);
		});
	}
});


// 重命名文件

fs.rename('a.js', 'b.js');

// 改变文件权限

fs.chmod('b.js', '0755');
