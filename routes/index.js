var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ code: 200 });
});

router.get('/login', function(req, res, next) {
    res.json({ code: 200, routerName: "login" });
});

router.get('/register', function(req, res, next) {
    res.json({ code: 200, routerName: "register" });
});

router.get('/forgot-password', function(req, res, next) {
    res.json({ code: 200, routerName: "Forgot Password" });
});

router.get('/logout', function(req, res, next) {
    res.json({ code: 200, routerName: "Logout" });
});

module.exports = router;