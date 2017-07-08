import path from 'path'
import webpack from 'webpack'

export default {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, '../src')
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    plugins: []
}
