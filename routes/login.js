var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var password_hash = require('password-hash');

router.post('/', function(req, res) {
	checkPassword(req, res);
	//res.render('dashboard', {name: req.body.user});
});

function checkPassword (req, res) {
	var un = req.body.user;
	var pass = req.body.password;
	
	var hashed_password = password_hash.generate(pass);
	
	mongoose.model('users').findOne({username:un}, function(err, doc) {
		console.log(doc.person);
		/*if (un === doc['username'] && pass === doc['password']) {
			res.render('dashboard', {name:req.body.user});
		}
		else {
			console.log(doc);
			res.redirect('/');
		}*/
	});
}

module.exports = router;
