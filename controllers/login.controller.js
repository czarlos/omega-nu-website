var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

exports.loginFunction = function(req, res) {
	checkPassword(req, res);
	//res.render('dashboard', {name: req.body.user});
};

function checkPassword (req, res) {
	var un = req.body.user;
	var pass = req.body.password;
    //router.current_user = un;
    exports.current_user = un;
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
};
