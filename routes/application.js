var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost:27017/test");

router.post('/', function(req, res) {
	res.render('application', function(err, html){
		
	});	
	console.dir(req.body.first_name);

	var winesSchema = new mongoose.Schema({
		first_name: String,
		last_name: String,
		github_handle: String,
		email: String,
		linkedin: String,
		website: String,
		about: String
	}); 
	console.dir("real " + req.body.first_name);
	var Money = mongoose.model('Book', winesSchema);
	var small = new Money({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		github_handle: req.body.github_handle,
		email: req.body.email,
		linkedin: req.body.linkedin,
		website: req.body.website,
		about: req.body.about
	});
	small.save(function (err) {
		if (err) {
			return handleError(err);
		}
		else {
			res.redirect('/');
		}	
	});
});

module.exports = router;
