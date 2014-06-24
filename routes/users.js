var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

router.get('/', function(req, res) {
	var id = req.query.id;
	mongoose.model('users').findById(id, function(err, users) {	
		//console.dir(users); //This is good for debugging but it probably slows down the popovers
		res.send(users);
	});
});

module.exports = router;