define(function(require, exports, module){
	console.log('module 2 loaded');
	var count = 10;
	module.exports = {
		add: function(num){
			return num + count;
		}
	}
});
