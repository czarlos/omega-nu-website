var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Dashboard = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});
	var dashboard = new Dashboard({
		_id: "carlos",
		person: req.body.first_name + " " + req.body.last_name,
		company: req.body.organization,
		concentrations: "Concentration",
		skills: req.body.skills,
		bio: req.body.bio,
		interests: "coding"
	});
	
	var user = req.body.first_name + " " + req.body.last_name;	

	Dashboard.findOne({person:"Carlos Reyes"}).update({company:"YMCMB"}, function(err){
		if (err) {
			console.dir("err");
		}
		else {
			res.redirect('/');
		}
	});
});


module.exports = router;
