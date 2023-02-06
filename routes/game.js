var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('game', { title: 'Game - Tic Tac Toe', nickname1: '123', nickname2: '321'})
})

module.exports = router