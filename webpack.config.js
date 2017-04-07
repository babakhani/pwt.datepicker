// https://webpack.js.org/configuration/
const minimize = process.env.MIN ? true : false;
let webpack = require('webpack'),
    path = require('path'),
    pkg = require("./package.json"),
    fileName = pkg.name + ".js",
    plugins = [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(pkg.version)
        })
    ];

if (minimize) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    fileName = pkg.name + ".min.js";
}

module.exports = {
    entry: "./src/es6/plugin.js", // string | object | array
    output: {
        library: "persianDate",
        libraryTarget: "umd2",
        path: path.resolve(__dirname, "dist"), // string
        filename: fileName // string
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "./src")
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
};
