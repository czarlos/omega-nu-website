var express = require('express');
var router = express.Router();
var users = require('../controllers/users.controller');

router.get('/', users.usersFunction);

module.exports = router;
