var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    res.render('game', {title: 'Game - Tic Tac Toe', nickname1: 'Piotrek', nickname2: 'Grzesiu', IDroom: req.params.id}) 
})

module.exports = router