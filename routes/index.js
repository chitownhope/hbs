var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tina' });
});

router.get('/about', function(req, res, next){
	var self = {
		name: 'James',
		phone: '773-920-8330',
		email: 'james@codeforcoffee.org'
	};
	//response.render()
	//1st: template (view)
	//2nd: an Object with data
	res.render('about', self);
});

router.get('/faq', function(req, res, next){
	var questions = {
		questions: ['i can have cookie', 'can i do this', 'what time is it'],
		answers: ['yes', 'i dont know', 'time to go home']
	};
	res.render('faq', questions);
});

router.get('/login', function(req, res, next){
	var user = {
		// name: 'tina',
		password: 'hope',
		hint: 'middlename'
	};
	res.render('login', user);
});

module.exports = router;













