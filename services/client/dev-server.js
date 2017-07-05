const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const app = new (require('express'))()

const compiler = webpack(webpackConfig)

const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 100,
        poll: true
    },
    stats: {
        colors: true
    }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(8080, '0.0.0.0', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('dev-server: 8080')
    }
})
