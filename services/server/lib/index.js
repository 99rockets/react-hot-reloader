const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/api', (req, res) => {
    res.send('Welcome to server')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})
