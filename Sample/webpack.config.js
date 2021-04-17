const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TSConfigPathsPlugin({
                configFile: 'tsconfig.json',
            })
        ],
        fallback: {
            'assert': require.resolve('assert/'),
            'util': require.resolve('util/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: 'tsconfig.json',
                },
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
            customLanguages: [
                {
                    label: 'projections',
                    entry: '@dolittle/projections-dsl.editor/Contributions/Projections/projections.entry.ts',
                    worker: {
                        id: 'projections',
                        entry: '@dolittle/projections-dsl.editor/Contributions/Projections/projections.worker.ts',
                    }
                }
            ],
            languages: [],
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
