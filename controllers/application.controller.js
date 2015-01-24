var mongoose = require('mongoose');
var Applicant = require('../models/applicant.model.js');
var db = mongoose.connect("mongodb://localhost:27017/test");

exports.newApplicant = function(req, res) {
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
};

