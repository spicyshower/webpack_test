const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // devtool: 'source-map',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/main.js',
        // filename: './js/[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.vue/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            {
                test: /\.js/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env',{ 'targets': '> 0.25%, not dead' }],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'img/[folder]/[name].[ext]',
                            publicPath: '/',
                        },
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         progressive: true,
                    //         quality: 80,
                    //     },
                    // },
                ]
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/detail.pug',
            filename: 'detail.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/test/index.pug',
            filename: './test/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/templates/test/index.pug',
        //     filename: 'index.html'
        // }),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin('./src/favicon.png'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ]
}
