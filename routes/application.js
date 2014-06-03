var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Applicant = require('../models/applicant_model.js');

var db = mongoose.connect("mongodb://localhost:27017/test");

router.post('/', function(req, res) {
	res.render('application', function(err, html){
		
	});

	var applicant = new Applicant({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		github_handle: req.body.github_handle,
		email: req.body.email,
		linkedin: req.body.linkedin,
		website: req.body.website,
		about: req.body.about,
		resume: req.body.resume
	});
	applicant.save(function (err) {
		if (err) {
			return handleError(err);
		}
		else {
			res.redirect('/');
		}	
	});
});

module.exports = router;