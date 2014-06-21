var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res) {
	res.render('dashboard', {title:'This money'});
});

module.exports = router;
