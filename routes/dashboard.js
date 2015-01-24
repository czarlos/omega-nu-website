var express = require('express');
var router = express.Router();
var dashboard = require('../controllers/dashboard.controller');

router.post('/', dashboard.dashboardFunction);

module.exports = router;
