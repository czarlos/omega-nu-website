var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

//mongoose.connect("mongodb://localhost:27017/test");

router.get('/', function(req, res) {
	mongoose.model('users').find(null, function(err, users) {
		res.send(users);
	});
});

module.exports = router;
