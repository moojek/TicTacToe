var socket = require('socket.io')
var gameLogic = require('./game-logic')

const setupGameServer = function (httpServer) {
    var io = socket(httpServer)

    Rooms = []

    io.on('connection', function (socket) {
        socket.on('create', function (params) {
            socket.join(params[0]);
            let sign = 'X'
            if (!Rooms[params[0]])
                sign = 'O'
            Rooms[params[0]] = 'X'
            let board = []
            let characters = {X: 'O', O: 'X'}

            console.log("connected: " + socket.id)

            socket.on('click', function (id) {
                if (board[parseInt(id)] || Rooms[params[0]] != sign)
                    return
                board[parseInt(id)] = Rooms[params[0]]
                io.to(params[0]).emit('click', [id, Rooms[params[0]]]);
                if (gameLogic.isWinner(board)) {
                    io.to(params[0]).emit('winner', Rooms[params[0]] == 'O' ? params[1] : params[2] + ' wins!')
                    io.to(params[0]).emit('reset')
                    board = []
                    Rooms[params[0]] = 0
                }

                Rooms[params[0]] = characters[Rooms[params[0]]]
            })
        });
    })
}

module.exports = setupGameServer