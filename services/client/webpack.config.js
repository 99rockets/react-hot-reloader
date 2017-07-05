const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        hot: true,
        disableHostCheck: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
