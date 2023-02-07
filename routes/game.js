var express = require('express')
var router = express.Router()

router.get('/:id/:name', function (req, res, next) {
    res.render('game', {title: 'Game - Tic Tac Toe'}) 
})

module.exports = router