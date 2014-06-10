var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Dashboard = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});
	var dashboard = new Dashboard({
		person: req.body.first_name + req.body.last_name,
		company: req.body.organization,
		skills: req.body.skills,
		bio: req.body.bio
	});
	
	Dashboard.find({person:"Carlos Reyes"}).update({person:"Carlos Reyes"}, {company:"YMCMB"}, function(err){
		if (err) {
			console.dir("err");
		}
	});

});


module.exports = router;
