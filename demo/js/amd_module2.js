define(function(){
	var count = 5;

	function add(num){
		return num + count;
	}

	return {
		add: add
	};
});
