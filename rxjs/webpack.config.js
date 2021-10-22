const path = require("path");



const HtmlWebpackPlugin = require("html-webpack-plugin");

const { watch } = require("fs");
 
module.exports = {
    entry: ["./src/index.ts"],
    devtool: "inline-source-map",
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }, 
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
 
    output: {
        filename: "index_bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "./index.html"),
        filename: 'index.html'
    })],

    devServer: {
        liveReload: true
      },

};