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
        publicPath: 'http://localhost:8080' + base_config.output.publicPath,
        filename: 'bundle.js'
    },
    plugins: [
        ...base_config.plugins,
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
