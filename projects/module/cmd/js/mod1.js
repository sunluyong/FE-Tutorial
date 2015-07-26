define(function(requie, exports, module){
	console.log('mod1 loaded!');

	var name = 'Byron';

	exports.print = function(){
		console.log(name);
		return name;
	};

});
