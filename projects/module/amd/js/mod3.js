define(['js/mod1', 'js/mod2'], function (mod1, mod2) {
	console.log('mod3 loaded!');

	return {
		print: function(age){
			console.log(mod1.print() + '\t' + mod2.print() + '\t' + age);
		}
	};
});
