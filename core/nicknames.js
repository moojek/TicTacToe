const middleware = function (req, res, next) {
    if(!req.cookies.nickname) {
        res.redirect('/')
    } else {
        next()
    }
}

const addNicknameCookie = function (res, nickname) {
    res.cookie('nickname', nickname)
}

module.exports = {middleware, addNicknameCookie}