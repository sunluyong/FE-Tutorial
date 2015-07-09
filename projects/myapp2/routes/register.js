var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register', { title: '注册' });
});

router.post('/', function(req, res, next){
	var username = req.body.username;
	var password = req.body.password;
	var repass = req.body.repassword;

	var result = validate(username);

	if(password !== repass){
		res.send('密码不一致');
	}

	if(result){
		res.send('注册成功');
	}else{
		res.send('用户名重复');
	}
});

router.get('/getUser', function (req, res, next) {
	var username = req.query.username;

	var result =  validate(username);

	res.json({isValid: result});
});

function validate(username){
	var list = ['byron', 'casper', 'vincent'];

	if(list.indexOf(username) > -1 ){
		return false
	}

	return true;
}

module.exports = router;
