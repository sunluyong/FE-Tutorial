var express = require('express');
var router = express.Router();

var list = [
	{name: 'Byron'},
	{name: 'Casper'},
	{name: 'Vincent'}
];

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', list: list });
});

router.post('/delete', function(req, res, next){
	var name = req.body.username;

	for(var i = 0; i < list.length; i++){
		if(list[i].name === name){
			list.splice(i,1);
			break;
		}
	}

	res.json({done: true});
});

module.exports = router;
