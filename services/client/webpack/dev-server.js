import webpack  from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config  from './webpack.config.development'

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    filename: config.output.filename,
    inline: true,
    hot: true,
    stats: true,
    historyApiFallback: true,
    disableHostCheck: true
}).listen(8080, '0.0.0.0', (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('webpack dev server listening on localhost:8080')
    }
})
