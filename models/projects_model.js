var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projects_schema = new Schema({
	title: String,
	description: String,
	image: String, //url of the image, may remove this field if we use GridFS
	contributers: [Schema.Types.ObjectId]
});
mongoose.model('projects', projects_schema);