var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

//mongoose.connect("mongodb://localhost:27017/test");

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
	mongoose.model('users').find(null, function(err, users) {
		res.render('index', {team: users});
	});
});  

module.exports = router;
