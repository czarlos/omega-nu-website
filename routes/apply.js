var express = require('express');
var router = express.Router();
var apply = require('../controllers/apply.controller');

router.get('/', apply.applyFunction);

module.exports = router;
