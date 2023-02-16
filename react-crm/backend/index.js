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

app.post('/api/clients', (req, res) => {
    let data = req.body
    let client = data.email
    if (db.hasOwnProperty(client)) {
        console.log('user already in db')
    } else {
        db[client] = {email: data.email, name: data.name, stage: 1}
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