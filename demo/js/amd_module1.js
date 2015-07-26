define(function(){
	console.log('module1 loaded');
	function printName(name){
		console.log(name);
	}

	return {
		printName: printName
	};
});
