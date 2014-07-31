var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var un = "";

router.post('/', function(req, res) {
	checkPassword(req, res);
	//res.render('dashboard', {name: req.body.user});
});

function checkPassword (req, res) {
	un = req.body.user;
	var pass = req.body.password;

	mongoose.model('users').findOne({username:un}, function(err, doc) {
		// We shouldn't need to do this
		var json_string = JSON.stringify(doc);
		var subject = JSON.parse(json_string);
        if (subject==null) {
            res.redirect('/');
        }
		else if (un === subject['username'] && bcrypt.compareSync(pass, subject['password'])) {
			res.render('dashboard', {name:req.body.user});
		}
		else {
			res.redirect('/');
		}
	});
}

exports.username = un;
module.exports = router;
