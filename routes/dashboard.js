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
		company: checkString("company", user, req.body.organization, "string"),
		concentrations: checkString("concentrations", user, req.body.concentrations, "array"),
		skills: checkString("skills", user, req.body.skills, "array"),
		bio: checkString("bio", user, req.body.bio, "string"),
		interests: checkString("coding", user, "", "string"),
        password: checkPassword("password", user, req.body.password_old)
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
		// We shouldn't need to do this, terrible code
		var json_string = JSON.stringify(doc);
		var doc = JSON.parse(json_string);

        if (err) {
			console.dir(err);
		}
        else if (field==='password') {
            console.log(doc[field]);
            return doc[field];
        }
		else {
			return doc[field];
		}
	});
}

function checkString (field, user, input, type) {
	if (input !== null && input !== "") {
		if (type === "string") {
			return input;
		}
		if (type === "array") {
			return input.split(",");
		}
		else {
			return "Please write better code for this";
		}
	}
	else {
		getValue(user, field);
	}
}

function checkPassword (field, user, input) {
    //console.log(input);
    if (input !== null && input !== "") {
        console.log(getValue(user, field));
        if (input === getValue(user, field)) {
            console.log('here');
            return req.body.password_new;
        }
    }
    else {
        getValue(user, field);
    }
}

module.exports = router;
