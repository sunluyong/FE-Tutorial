var express = require('express');
var router = express.Router();

router.get('/1', function(req, res, next){
	res.json({success: true});
})

router.get('/2', function(req, res, next){
	var data = loadDataFromDB();
	setTimeout(function(){
		res.json(data);
	}, 3000);
});

var list = [
	{
		id: '1',
		name: 'Byron',
	},
	{
		id: '2',
		name: 'Casper',
	},
	{
		id: '3',
		name: 'Vincent',
	},
	{
		id: '4',
		name: 'Junice',
	},
	{
		id: 'r',
		name: 'Sean',
	},
];

function getPersonById(id){
	for(var i = 0; i < list.length; i++){
		if(list[i].id == id){
			return list[i];
		}
	}

	return null;
};

router.get('/3', function(req, res, next){
	var id = req.query.id;
	console.log(req.query.a);
	var data = getPersonById(id);
	setTimeout(function(){
		res.json(data);
	}, 1000);
});

function loadDataFromDB(){
	return {
		id: '1',
		name: 'Byron',
		age: 24,
		sex: 'Male'
	};
}

module.exports = router;
