var socket = require('socket.io')
var gameLogic = require('./game-logic')

const setupGameServer = function (httpServer) {
    var io = socket(httpServer)

    var Rooms = []
    var board = []
    var UsersCounter = []

    io.on('connection', function (socket) {
        socket.on('create', function (params) {
            room = params[0]
            if(!UsersCounter[room])
                UsersCounter[room] = 0
            UsersCounter[room]++
            if (UsersCounter[room] > 2) {
                socket.emit('NoSlots', 'This room is occupied')
                socket.disconnect()
            }
            console.log("Counter: " + UsersCounter[room])
            socket.join(room)
            let sign = 'X'
            board[room] = []
            if (!Rooms[room])
                sign = 'O'
            Rooms[room] = 'X'
            let characters = {X: 'O', O: 'X'}

            var cnt = 0
            
            socket.on('click', function (id) {
                if(!cnt)
                    io.to(room).emit('DisplayUser', [sign == 'O' ? false : true, params[1]])
                if (board[room][parseInt(id)] || Rooms[room] != sign)
                    return
                board[room][parseInt(id)] = Rooms[room]

                io.to(room).emit('click', [id, Rooms[room]]);
                if (gameLogic.isWinner(board[room])) {
                    io.to(room).emit('winner', Rooms[room] == 'O' ?  'var1' : 'var2')
                    board[room] = []
                }

                Rooms[room] = characters[Rooms[room]]
            })

            socket.on('disconnect', function() {
                UsersCounter[room]--
                io.emit('Reset')
            })
        });
    })
}

module.exports = setupGameServer