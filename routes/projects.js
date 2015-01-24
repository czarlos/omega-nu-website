var express = require('express');
var router = express.Router();
var projects = require('../controllers/projects.controller');

router.get('/', projects.projectsFunction);

module.exports = router;
