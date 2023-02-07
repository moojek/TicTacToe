function isWinner(board) {
    let winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let res = 0
    winning.forEach(win => {
        if (board[win[0]] && board[win[0]] == board[win[1]] && board[win[1]] == board[win[2]])
            res++
    })
    return res
}

function isDraw(board) {
    let res = 0
    for(var i=0; i<9; i++)
        if(!board[i])
            res++
    if(!res)
        return true
    return false
}

module.exports = {isWinner, isDraw}