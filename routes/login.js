var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

router.post('/dashboard', function(req, res) {
	console.dir("THIS MONEY");
	var user = req.body.user;
	var password = req.body.password;
	
	var money = isValidCombo();
	console.dir(money);

	if (isValidCombo(email, password)) {
		res.redirect('/dashboard');
	}
	else {
		res.redirect('/dashboard');
		//res.redirect('/');
	}
	res.send("this");
});

function isValidCombo(name, pass) {

	console.log('this money');
	mongoose.model('users').find({person : user}, function(err, users) {
		res.send("hello");
	});
}

module.exports = router;
