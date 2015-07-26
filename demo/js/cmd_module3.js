define('cmd__module1', function(){
	console.log('module1 loaded');
	function printName(name){
		console.log(name);
	}

	return {
		printName: printName
	};
});

define('cmd__module2', function(){
	console.log('module2 loaded');
	var count = 5;

	function add(num){
		return num + count;
	}

	return {
		add: add
	};
});

define('cmd_module3', function(require, exports, module){
	console.log('module3 loading');

	var mod2 = require('cmd_module2');
	var mod1 = require('cmd_module1');

	console.log('module3 loaded');

	exports.done = function(){
		console.log(mod1, mod2);
	}
});
