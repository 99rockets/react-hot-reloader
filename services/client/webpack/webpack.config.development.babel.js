import path from 'path'
import webpack from 'webpack'
import base_config from './webpack.config.base.babel'

export default {
    ...base_config,
    entry: [
        ...base_config.entry
    ],
    output: {
        ...base_config.output,
        publicPath: 'http://0.0.0.0:8080' + base_config.output.publicPath,
        filename: 'bundle.js'
    },
    plugins: [
        ...base_config.plugins,
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        host: '0.0.0.0',
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
    }
}
