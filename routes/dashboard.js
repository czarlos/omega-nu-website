var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Dashboard = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});
	
	var user = req.body.first_name + " " + req.body.last_name;
	var dashboard = new Dashboard({
		_id: Dashboard.findOne({person: user})._id,
		person: user,
		company: req.body.company, //myFunction(company, req),
		concentrations: "Concentration",
		skills: req.body.skills,
		bio: req.body.bio,
		interests: "coding"
	});
	console.dir(myFunction());	
	Dashboard.findOne({person:user}).update(dashboard.toObject(), function(err){
		if (err) {
			return handleError(err);
		}
		else {
			res.redirect('/');
		}
	});
});

function myFunction (field, req) {
	if(field === "") {
		return Dashboard.find({person: user}, {field: 1});
	}
	else {
		return req.body[field];
	}
}

module.exports = router;
