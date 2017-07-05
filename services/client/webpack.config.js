const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/'
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
