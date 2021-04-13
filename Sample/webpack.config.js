const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'sample': './index.tsx',
    },
    output: {
        globalObject: 'self',
        path: Path.resolve(__dirname, 'Distribution'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new MonacoWebpackPlugin({
        }),
        new Webpack.ProvidePlugin({
            'process': 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    devtool: 'eval-source-map',
    devServer: {
        headers: {
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Opener-Policy': 'same-origin',
        }
    }
}
