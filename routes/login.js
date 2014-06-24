var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/', function(req, res) {
	res.send("this");
});

module.exports = router;
