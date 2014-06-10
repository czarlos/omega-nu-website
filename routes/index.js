var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_model = require('../models/users_model.js');

//var db = mongoose.connect("mongodb://localhost:27017/test");

/* GET home page. */
router.get('/', function(req, res) {
    mongoose.model('users').find().sort('_id').exec(function(err, users) {
        res.render('index', {team: users});
    });
});  

module.exports = router;
