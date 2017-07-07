import path from 'path'
import webpack from 'webpack'

export default {
    entry: [
        path.resolve(__dirname, '../src')
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '../public'),
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            }
        ]
    },
    plugins: []
}
