var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/', function(req, res) {
	checkPassword(req, res);
	//res.render('dashboard', {name: req.body.user});
});

function checkPassword (req, res) {
	var user = req.body.user;
	var pass = req.body.password;
	var placeholder = user + " " + pass;
	mongoose.model('users').find({person:placeholder}, function(err, user) {
		if (user[0]==null || err) {
			res.redirect('/');
		}
		else {
			res.render('dashboard', {name: req.body.user});
		}
	});
}

module.exports = router;
