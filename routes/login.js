var express = require('express');
var router = express.Router();
var login = require('../controllers/login.controller');

router.post('/', login.loginFunction);

module.exports = router;
