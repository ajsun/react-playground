var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
    entry: [APP_DIR + '/index.js', APP_DIR + '/styles/main.css'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }

};
