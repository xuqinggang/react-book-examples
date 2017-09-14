var path = require('path');
module.exports = {
    entry: './src/app.js',
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    devtool: "module-eval-source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel'
        }]
    }
};
