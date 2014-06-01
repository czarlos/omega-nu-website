var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var applicant_schema = new Schema({
    firstname : String,
	lastname : String
});

var Applicant = mongoose.model('Applicants', applicant_schema);

var new_applicant = new Applicant({
	firstname : "2Chainz",
	lastname : "Money",
	collection : 'applicants'
});

new_applicant.save(function(err, new_applicant) {
	if (err) {
		return console.error(err);		
	}
});

