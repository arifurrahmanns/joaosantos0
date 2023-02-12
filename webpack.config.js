const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/app.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'app.bundle.js',
    },
}; 