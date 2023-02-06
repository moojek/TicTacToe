var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('rooms', { title: 'Rooms - Tic Tac Toe' })
})

module.exports = router