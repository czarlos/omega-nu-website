var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dashboard_model = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});
	
	var dashboard = new Dashboard({
		first_name: req.body.first,
		last_name: req.body.last,
		organization: req.body.organization,
		skills: req.body.skills,
		website: req.body.website,
		linkedin: req.body.linkedin,
		bio: req.body.bio
	});
	
	dashboard.save(function(err) {
		if (err) {
			return handleError(err);
		}
		else {
			res.redirect('/');
		}
	});
});

module.exports = router;
