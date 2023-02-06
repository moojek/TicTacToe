var express = require('express')
var router = express.Router()

var rooms = []

router.get('/', function (req, res, next) {
    res.render('rooms', { title: 'Rooms - Tic Tac Toe', nickname: req.cookies.nickname, rooms: rooms})
})

router.post('/', function (req, res, next) {
    console.log('rooms: ' + rooms);
    rooms.push(req.body.RoomName.trim())
    res.render('rooms', { title: 'Rooms - Tic Tac Toe', nickname: req.cookies.nickname, rooms: rooms})
});

module.exports = router