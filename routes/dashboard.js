var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res) { console.dir("THIS MONEY");
	res.render('dashboard', {name: "Carlos Reyes"});
});

module.exports = router;
