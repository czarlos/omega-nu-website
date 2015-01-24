var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var login = require('../controllers/login.controller');
var Dashboard = require('../models/dashboard.model');

exports.dashboardFunction = function(req, res) {
	res.render('dashboard', function(err, html) {});
    var user = "Carlos Reyes";

    if (req.body.password_old !== null && req.body.password_old !== "") {
        Dashboard.update({username:login.current_user}, {password:(bcrypt.hashSync(req.body.password_new, 8))}, {multi:true}, function(err, numAffected, raw){
        });
    }

	var dashboard = new Dashboard({
		_id: "",
		person: checkString("person", user, req.body.first_name+" "+req.body.last_name, "string"),
		company: checkString("company", user, req.body.organization, "string"),
		concentrations: checkString("concentrations", user, req.body.concentrations, "array"),
		skills: checkString("skills", user, req.body.skills, "array"),
		bio: checkString("bio", user, req.body.bio, "string"),
		interests: checkString("coding", user, "", "string")
	});
	Dashboard.findOne({username:login.current_user}).update(dashboard.toObject(), function (err) {
		if (err) {
			console.dir("err");
		}
		else {
			res.redirect('/');
		}
	});
};

function getValue (user, field) {
	Dashboard.findOne({username:login.current_user}, function(err, doc) {
		// We shouldn't need to do this, terrible code
		var json_string = JSON.stringify(doc);
		var doc = JSON.parse(json_string);

        if (err) {
			console.dir(err);
		}
        else if (field==='password') {
            return doc[field];
        }
		else {
			return doc[field];
		}
	});
};

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
};

function checkPassword (field, user, input) {
    if (input !== null && input !== "") {
        console.log(getValue(user, field));
        if (input === getValue(user, field)) {
            return req.body.password_new;
        }
    }
    else {
        getValue(user, field);
    }
};
