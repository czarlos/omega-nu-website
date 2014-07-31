var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
	person: String,
	company: String,
	concentrations: Array,
	skills: Array,
	bio: String,
	interests: String,
    password: String
});

var Dashboard = mongoose.model('Users', dashboardSchema);

module.exports = Dashboard;
