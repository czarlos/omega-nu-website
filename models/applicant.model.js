var mongoose = require('mongoose');

var applicantSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	github_handle: String,
	email: String,
	linkedin: String,
	website: String,
	about: String,
	resume: Buffer
}); 

var Applicant = mongoose.model('Applicants', applicantSchema);

module.exports = Applicant;
