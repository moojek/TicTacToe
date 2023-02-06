var express = require('express');
var router = express.Router();
var nicknames = require('../core/nicknames')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tic Tac Toe' });
});

router.post('/', function (req, res, next) {
  if(!req.body.nickname) {

  } else {
    nicknames.addNicknameCookie(res, req.body.nickname)
    res.redirect('/rooms')
  }
});

module.exports = router;
