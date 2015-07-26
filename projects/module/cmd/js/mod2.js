define(function(requie, exports, module){
	console.log('mod2 loaded!');

	var sex = 'male';

	exports.print = function(){
		console.log(sex);
		return sex;
	};

});
