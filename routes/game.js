var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var db = require('../persistence/in-memory-db')

router.get('/', function (req, res, next) {
    if (!req.query.roomId) {
        next(createError(400), 'No \'roomId\' parameter')
    } else
        res.redirect('/game/' + req.query.roomId)
})
router.get('/:id', function (req, res, next) {
    if (!db.isRoomActive(req.params.id))
        next(createError(404), 'There isn\'t any game with such id')
    else {
        console.log(req.params.id)
        res.render('game', {
            title: 'Game - Tic Tac Toe',
            nickname1: 'Piotrek',
            nickname2: 'Grzesiu',
            roomId: req.params.id
        })
    }
})

module.exports = router