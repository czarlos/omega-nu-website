var express = require('express');
var router = express.Router();
var application = require('../controllers/application.controller');

router.post('/', application.newApplicant);

module.exports = router;
