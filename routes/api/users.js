const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Get /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
router.get('/fetch-token', ensureLoggedIn, usersCtrl.fetchToken)


// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login)

module.exports = router;