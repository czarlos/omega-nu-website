var mongoose = require('mongoose');
var projectsModel = require('../models/projects.model.js');

exports.projectsFunction = function(req, res) {
	mongoose.model('projects').find(null, function(err, projects) {
		//console.dir(projects);
		res.send(projects);
	});
};
