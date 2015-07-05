var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next){
	/*
		1. 读取用户输入的表单
		2. 验证用户名密码
		3. 根据验证结果给出反馈
	*/

	var username = req.body.username;
	var password = req.body.password;

	var result = validate(username, password);

	if(result){
		res.send(req.body.ck + req.body.se);
	}else{
		res.send('Error');
	}
});

router.get('/repeat', function(req, res, next){
	var un = req.query ? req.query.un : '';

	var list = ['byron', 'casper', 'vincent'];

	if(list.indexOf(un) > -1){
		res.json({repeat: true});
	}else{
		res.json({repeat: false});
	}
});

function validate(username, password){
	if(username === 'byron' && password === '1'){
		return true;
	}

	return false;
}

module.exports = router;
