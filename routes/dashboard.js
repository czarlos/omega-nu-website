var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Dashboard = require('../models/dashboard_model.js');

router.post('/', function(req, res) {
	res.render('dashboard', function(err, html) {});

	var user = req.body.first_name + " " + req.body.last_name;

	var dashboard = new Dashboard({
		_id: "",
		person: user,
		company: checkValue("company", user, req.body.organization),
		concentrations: checkValue("concentrations", user, ""),
		skills: checkValue("skills", user, req.body.skills),
		bio: checkValue("bio", user, req.body.bio),
		interests: checkValue("coding", user, "")
	});
	Dashboard.findOne({person:user}).update(dashboard.toObject(), function (err) {
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

function checkValue (field, user, input) {
	if (input !== null && input !== "") {
		return input;
	}
	else {
		getValue(user, field);
	}
}
  
module.exports = router;
