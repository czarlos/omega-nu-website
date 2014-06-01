var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost:27017/test");

router.get('/', function(req, res) {
	res.render('application', function(err, html){
		
	});	
	console.dir(req.body);

	/*var winesSchema = new mongoose.Schema({
		first_name: 'string',
		last_name: 'string'
	}); 
	console.dir("real " + req.body.first_name);
	var Money = mongoose.model('Book', winesSchema);
	var small = new Money({
		first_name: "2Chainz",
		last_name: "money"
	});
	small.save(function (err) {
		if (err) {
			return handleError(err);
		}
		else {
			res.redirect('/');
		}	
	}); */
});

module.exports = router;
