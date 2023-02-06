var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('game', {title: 'Game - Tic Tac Toe', nickname1: 'Piotrek', nickname2: 'Grzesiu', score1: 0, score2: 0}) 
})

module.exports = router