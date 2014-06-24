var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

router.post('/', function(req, res) {
	var user = req.body.user;
	var password = req.body.password;

	if (isValidCombo(email, password)) {
		res.redirect('/dashboard');
	}
	else {
		res.redirect('/');
	}
	res.send("this");
});

function isValidCombo(email, password) {

}

module.exports = router;
