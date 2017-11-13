
module.exports = function (gulp, plugin, config) {
    gulp.task('clean', function (callback) {
        return gulp.src(config.sDest)
                   .pipe(plugin.clean());
    });
}
