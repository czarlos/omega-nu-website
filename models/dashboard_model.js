var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	organization: String,
	skills: String,
	website: String,
	linkedin: String,
	bio: String
});

var Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
