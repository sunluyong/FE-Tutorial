define(['mod1', 'mod2'], function(require, exports, module){
	console.log('mod3 loaded!');

	var mod2 = require('mod2');
	var mod1 = require('mod1');

	module.exports = {
		print: function(age){
			console.log(mod1.print() + '\t' + mod2.print() + '\t' + age);
		}
	};
});
