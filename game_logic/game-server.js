var socket = require('socket.io')
var gameLogic = require('./game-logic')

const setupGameServer = function (httpServer) {
    var io = socket(httpServer)

    var Rooms = []
    var board = []

    io.on('connection', function (socket) {
        socket.on('create', function (params) {
            socket.join(params[0]);
            let sign = 'X'
            board[params[0]] = []
            if (!Rooms[params[0]])
                sign = 'O'
            Rooms[params[0]] = 'X'
            let characters = {X: 'O', O: 'X'}

            console.log("connected: " + socket.id);

            socket.on('click', function (id) {
                if (board[params[0]][parseInt(id)] || Rooms[params[0]] != sign)
                    return
                board[params[0]][parseInt(id)] = Rooms[params[0]]

                io.to(params[0]).emit('click', [id, Rooms[params[0]]]);
                if (gameLogic.isWinner(board[params[0]])) {
                    io.to(params[0]).emit('winner', Rooms[params[0]] == 'O' ?  'var1' : 'var2')
                    board[params[0]] = []
                }

                Rooms[params[0]] = characters[Rooms[params[0]]]
            })
        });
    })
}

module.exports = setupGameServer