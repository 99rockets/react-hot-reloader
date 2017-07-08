import path from 'path'
import webpack from 'webpack'
import base_config from './webpack.config.base.babel'

export default {
    ...base_config,
    entry: [
        // 'webpack-dev-server/client?http://0.0.0.0:8080',
        // 'webpack/hot/only-dev-server',
        ...base_config.entry
    ],
    output: {
        ...base_config.output,
        publicPath: 'http://localhost:8080' + base_config.output.publicPath,
        filename: 'bundle.js'
    },
    plugins: [
        ...base_config.plugins,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        host: "0.0.0.0",
        inline: true,
        publicPath: '/static/'
    }
}
