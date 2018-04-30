const path = require('path');
const config = require('./config.js');
module.exports = {
    entry: path.resolve(__dirname, "..", "src/index.js"),
    output: {
        filename: '[name].js'
    },
    externals: {},
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:7].[ext]',
                    }
                }]
            },
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: '[path][name].[ext]',
            //             outputPath: "assets"
            //         }
            //     }]
            // },
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: "html-loader",
            //         options: {
            //             attrs: [':data-src'],
            //             minimize: true
            //         }
            //     }
            // }
        ]
    },
    plugins: [

    ]
}