var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
	person: String,
	company: String,
	concentrations: String,
	skills: String,
	bio: String,
	interests: String
});

var Dashboard = mongoose.model('Users', dashboardSchema);

module.exports = Dashboard;
