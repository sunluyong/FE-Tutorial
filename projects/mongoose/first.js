var Cat = require('./cat.js');

Cat.add({name: 'xxx', age: 2}, function(err){
	console.log('Add!');

	// Cat.delete('xxx', function(err){
	// 	console.log('Delete!')
	// });

	Cat.updateAll({}, {age: 6}, function(err){
		Cat.get({name: 'xxx'}, function(err, cats){
			console.log(cats);
		});
	});
});
