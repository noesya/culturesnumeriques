/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    watch: false,
    entry: path.join(__dirname, '_js', 'main'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js'),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js']
    }
};
