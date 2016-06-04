var path = require('path');

module.exports = {
    // webpack options
    cache: true,
    entry: ["./js/app/index.js"],
    output: {
        path: "js/",
        filename: "app.js",
        sourceMapFilename: '[file].map',
        publicPath: '/js/'
    },

    stats: {
        // Configure the console output
        colors: true,
        modules: true,
        reasons: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            }
        ]
    },

    plugins: [
    ],

    externals: {
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    progress: false, // Don't show progress
    failOnError: false, // don't report error to grunt if webpack find errors
    watch: false, // use webpacks watcher
    keepalive: false, // don't finish the grunt task
};