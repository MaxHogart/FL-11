const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let ImageminPlugin = require('imagemin-webpack-plugin').default

let path = require('path');

let conf = {
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'app.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',

                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
};

module.exports = conf;