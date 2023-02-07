const express = require('express')
const app = express()
const port = 3260

const Parser = require('rss-parser')
const pars = new Parser

let parsed = {}

const updateHabr = async (count) => {
    parsed = {}
    let feed = await pars.parseURL('https://habr.com/ru/rss/news/?fl=ru')
    feed.items.forEach((item, index) => {
        parsed[index + 1] = {title: item.title, link: item.link}
    })
    console.log('habr parse - success')
}
updateHabr()
setInterval(updateHabr, 60000)

app.use(express.json())

app.get('/content/:page', (req, res) => {
    let page = req.params.page
    if (page > Object.keys(parsed).length) {
        res.json({msg: "done"})
        return
    }
    console.log('news request')
    res.json(parsed[page])
    console.log('news sent succefully')
})

app.listen(port, ()=>{
    console.log(`started with port ${port}`)
})