define(function(){
	console.log('module2 loaded');
	var count = 5;

	function add(num){
		return num + count;
	}

	return {
		add: add
	};
});
