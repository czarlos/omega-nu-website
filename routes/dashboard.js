var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Dashboard = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});

	var user = req.body.first_name + " " + req.body.last_name;

	var dashboard = new Dashboard({
		_id: "carlos",
		person: user,
		company: req.body.organization,
		concentrations: "Concentration",
		skills: req.body.skills,
		bio: req.body.bio,
		interests: "coding"
	});
	
	
	// Dashboard.findOne({person: user}, function(err, doc) {
	// 	if (err) {
	// 		console.dir(err);
	// 	}
	// 	else {
	// 		console.dir(doc["company"]);
	// 	}
	// });
	
	//getValue(user, field);

	Dashboard.findOne({person:"Carlos Reyes"}).update({company:"YMCMB"}, function(err){
		if (err) {
			console.dir("err");
		}
		else {
			res.redirect('/');
		}
	});
});

function getValue (user, field) {
	Dashboard.findOne({person: user}, function(err, doc) {
		if (err) {
			console.dir(err);
		}
		else {
			console.dir(doc[field]);
			return doc[field];
		}
	});
}

function checkValue (doc, field. user, input) {
	var value = doc[field];
	if (value !== null && value !== "") {
		return input;
	}
	else {
		getValue(user, field);
	}
}


module.exports = router;
