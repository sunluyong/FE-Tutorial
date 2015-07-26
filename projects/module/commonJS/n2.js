var a = 3;
var b = 4;



module.exports = {
	aa: a,
	bb: b,
	print: function(){
		console.log(a);
		return 0;
	}
};

// module.exports 和 exports区别

// exports.print = function(){
// 	console.log(a);
// };

//var exports = module.exports;

// exports.a = 1;

// exports = {
// 	a: 1
// };
