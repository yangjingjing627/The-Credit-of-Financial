require('shelljs/global');
var webpack = require('webpack')
var ora = require('ora');
var webpackProConfig = require('../webpack.prod.conf');

module.exports = function(gulp, plugin, config) {
    gulp.task('webpack', function(callback) {
        var spinner = ora('building for production...')
        spinner.start();

        webpack(webpackProConfig, function(err, stats) {
            spinner.stop();
            if (err) {
                throw err;
            }
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n');

            callback();
        });
    });

}