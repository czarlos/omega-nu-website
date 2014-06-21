var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/login', function(req, res) {
	res.render('login', {title:'This money'});
});

module.exports = router;
