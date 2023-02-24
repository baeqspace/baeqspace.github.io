const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {origin: "*"}
})

const port = 3345

const db = {}

const tasksDb = []

app.use(express.json(), express.text())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    next()
})

app.post('/api/clients', (req, res) => {
    let data = req.body
    let client = data.email
    if (db.hasOwnProperty(client)) {
        console.log('user already in db')
    } else {
        db[client] = {email: data.email, name: data.name, stage: 1, cart: data.cart, prePrice: data.price}
        console.log('new user to db')
        io.emit('clients', Object.values(db))
    }
    console.log(db)
    res.send(`hello ${req.body.name}`)
})

app.post('/api/changeclients', (req, res) => {
    let clients = req.body
    for (let client of clients) {
        if (db.hasOwnProperty(client.email)) {
            db[client.email] = client
        }
    }
    res.send('done')
})

app.post('/api/deletetask', (req, res) => {
    let task = req.body
    console.log(tasksDb.indexOf(task))
    tasksDb.splice(tasksDb.indexOf(task), 1)
})

app.post('/api/task', (req, res) => {
    let task = req.body
    console.log(task)
    tasksDb.push(task)
    console.log(tasksDb)
})

app.get('/api/task', (req, res) => {
    res.json(tasksDb)
})

app.get('/api/clients', (req, res) => {
    res.json(Object.values(db))
    //res.json({msg: 'hello'})
})

io.on('connection', (socket => {
    console.log('user connected')

    socket.on('message', (message) => {
        console.log(message)
    })
}))

server.listen(port, ()=>{
    console.log(`started with port ${port}`)
})