var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users_schema = new Schema({
	_id : String
});

mongoose.model('users', users_schema);
