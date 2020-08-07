const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    return ({
        entry: {
            server: (argv.mode === 'production') ? './server/index.js' : './server/dev.js'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        mode: argv.mode,
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        }
    });
};
