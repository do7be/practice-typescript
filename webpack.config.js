const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        sample: './ts/sample.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader",
                options: { compilerOptions: {} }
            }],
        }]
    },
};