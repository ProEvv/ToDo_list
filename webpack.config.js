const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./app/index",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },

    devtool: "source-map",

    devServer: {
        contentBase: './dist'
    }
}