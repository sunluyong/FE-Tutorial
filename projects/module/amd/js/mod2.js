define([], function(){
	console.log('mod2 loaded!');

	var sex = 'male';

	return {
		print: function(){
			console.log(sex);
			return sex;
		}
	};

});
