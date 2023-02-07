const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const port = 3260

const db = []

app.use(express.json(), cookieParser())

const findUser = (user, pass) => {
    let found;
    if (pass) {
        found = db.filter(elem => elem.user == user && elem.pass == pass)
        return found
    }
    found = db.filter(elem => elem.user == user)
    return found
}

app.get('/auth/token', (req, res) => {
    let token1 = req.cookies.token1
    let token2 = req.cookies.token2
    let mainToken;
    if (!token1) {
        if (!token2) {
            res.json({msg: 'relogin1'})
            return
        }
        mainToken = token2
    } else mainToken = token1
    try {
        let decoded = jwt.verify(mainToken, 'shhsecret')
        if (!token1) {
            console.log('sending new pair')
            let accessToken = jwt.sign({user: decoded.user, exp: Math.floor(Date.now() / 1000) + 60}, 'shhsecret')
            let refreshToken = jwt.sign({user: decoded.user, exp: Math.floor(Date.now() / 1000) + (60 * 60)}, 'shhsecret')
            res.cookie('token1', accessToken, {httpOnly: true, secure: true, sameSite: true, maxAge: 60 * 1000})
            res.cookie('token2', refreshToken, {httpOnly: true, secure: true, sameSite: true, maxAge: 60 * 60 * 1000})
        }
        res.json({msg: 'success login', user: decoded.user})
    } catch(e) {
        res.json({msg: 'relogin2'})
    }
})

app.post('/auth/login', (req, res) => {
    if (!req.body.user || !req.body.pass) {res.json({msg:'error login'});return}
    let user = {user: req.body.user, pass: req.body.pass}
    let found = findUser(user.user, user.pass)
    if (found.length == 0) res.json({msg:'error login data'})
    else {
        console.log('sending after login')
        let accessToken = jwt.sign({user: user.user, exp: Math.floor(Date.now() / 1000) + 60}, 'shhsecret')
        let refreshToken = jwt.sign({user: user.user, exp: Math.floor(Date.now() / 1000) + (60 * 60)}, 'shhsecret')
        res.cookie('token1', accessToken, {httpOnly: true, secure: true, sameSite: true, maxAge: 60 * 1000})
        res.cookie('token2', refreshToken, {httpOnly: true, secure: true, sameSite: true, maxAge: 60 * 60 * 1000})
        res.json({msg:'success login'})
    }
})

app.post('/auth/reg', (req, res) => {
    if (!req.body.user || !req.body.pass) {res.json({msg:'error reg'});return}
    let user = {user: req.body.user, pass: req.body.pass}
    let found = findUser(user.user)
    if (found.length > 0) {res.json({msg:'error reg already'})}
    else {
        db.push(user)
        console.log('new reg')
        res.json({msg:'success reg'})
    }
})

app.listen(port, ()=>{
    console.log(`started with port ${port}`)
})