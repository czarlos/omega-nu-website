var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/', function(req, res) {
	console.dir(req.body.user);
	console.dir(req.body.password);
	checkPassword(req);
	res.render('dashboard', {name: req.body.user});
});

function checkPassword (req) {
	var user = req.body.user;
	var pass = req.body.password;
	var placeholder = user + " " + pass;
	mongoose.model('users').find({person:placeholder}, function(err, user) {
		console.dir(user);
	});
}

module.exports = router;
