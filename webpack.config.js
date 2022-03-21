const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports= {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                include: path.resolve(__dirname, "./src"),
                exclude: path.resolve(__dirname, "./node_modules/"),
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "./src"),
                exclude: path.resolve(__dirname, "./node_modules/"),
                use: 'babel-loader'

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, "./src"),
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: 'index.html'
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        contentBase: './dist/home/home',
        compress: true,
        port: 9000,
    }
}