var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
	person: String,
	organization: String,
	skills: String,
	bio: String
});

var Dashboard = mongoose.model('Users', dashboardSchema);

module.exports = Dashboard;
