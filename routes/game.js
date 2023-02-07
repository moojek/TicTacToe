var express = require('express')
var router = express.Router()
var router = express.Router()
var createError = require('http-errors')


router.get('/', function (req, res, next) {
    if (!req.query.roomId) {
        next(createError(400), 'No \'roomId\' parameter')
    } else
        res.redirect('/game/' + req.query.roomId)
})

router.get('/:id/:name/', function (req, res, next) {
    console.log(req.params.id)
    res.render('game', {title: 'Game - Tic Tac Toe'})
})


module.exports = router
module.exports = router