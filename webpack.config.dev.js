// https://webpack.js.org/configuration/
let webpack = require('webpack'),
    path = require('path'),
    pkg = require("./package.json"),
    fileName = pkg.name + ".js",
    plugins = [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(pkg.version)
        })
    ];
module.exports = {
    entry: "./src/es6/index.js", // string | object | array
    output: {
        library: "persianDatepicker",
        libraryTarget: "umd2",
        path: path.resolve(__dirname, "dist/js"), // string
        filename: fileName // string
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "./src/es6")
                ],
                exclude: [
                    path.resolve(__dirname, "./node_module")
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: plugins
}