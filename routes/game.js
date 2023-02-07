var express = require('express')
var router = express.Router()
var createError = require('http-errors')

router.get('/:id/:name', function (req, res, next) {
    res.render('game', {title: 'Game - Tic Tac Toe'}) 
})

module.exports = router