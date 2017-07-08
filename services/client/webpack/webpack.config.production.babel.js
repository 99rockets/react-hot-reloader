import webpack from 'webpack'
import base_config from './webpack.config.base.babel'

export default {
    ...base_config,
    output: {
        ...base_config.output,
        filename: '[hash]_bundle.js'
    }
}
