var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
Applicant = require('../models/applicant_model.js');

var mongoURI = process.env.MONGOLAB;
var mongooseURI = uriUtil.formatMongoose(mongoURI);
//var db = mongoose.connect(mongooseURI);
console.log("hello " + process.env.MONGOLAB);
mongoose.connect("mongodb://omeganu:omeganu1@ds061787.mongolab.com:61787/omeganu");
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
