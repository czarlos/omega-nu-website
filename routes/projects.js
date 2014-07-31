var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var projects_model = require('../models/projects_model.js');

router.get('/', function(req, res) {
	mongoose.model('projects').find(null, function(err, projects) {
		//console.dir(projects);
		res.send(projects);
	});
});

module.exports = router;
