let path = require("path");
let webpack = require("webpack");
let vueLoaderPlugin = require("vue-loader/lib/plugin");
let htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        contentBase: "./build",
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: {
                    loader: "url-loader",
                    options:{
                        limit:2048
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.(otf|ttf|woff|woff2|eot|svg)$/,
                use: {
                    loader: "url-loader"
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                  ]
            },
            {
                test:/\.sass$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                  ]
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: "./src/index.html",
            title: "类商城",
            filename: "index.html"
        })
    ],
    mode: "development",
    resolve: {}
}