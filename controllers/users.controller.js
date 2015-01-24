var mongoose = require('mongoose');
var userModel = require('../models/users.model.js');

exports.usersFunction = function(req, res) {
	var id = req.query.id;
	mongoose.model('users').findById(id, function(err, users) {
		//console.dir(users); //This is good for debugging but it probably slows down the popovers
		res.send(users);
	});
};


