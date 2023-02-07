var express = require('express')
var router = express.Router()
var db = require('../persistence/in-memory-db')

router.get('/', function (req, res, next) {
    res.render('rooms', { title: 'Rooms - Tic Tac Toe', nickname: req.cookies.nickname, rooms: db.getActiveRoomsNames()})
})

router.post('/', function (req, res, next) {
    console.log('rooms: ' + db.getActiveRoomsNames().length);
    db.addRoom(req.body.RoomName.trim())
    res.redirect('/rooms')
});

module.exports = router