var mongoose = require('mongoose');
var userModel = require('../models/users.model');

exports.indexFunction = function(req, res) {
    mongoose.model('users').find().sort('_id').exec(function(err, users) {
        res.render('index', {team: users});
    });
};
