var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res) {
	res.render('dashboard', {name: "Carlos Reyes"});
});

module.exports = router;
