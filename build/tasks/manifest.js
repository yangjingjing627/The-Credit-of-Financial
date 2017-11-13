
module.exports = function (gulp, plugin, config) {
    var sBase = config.sDest;
    gulp.task('manifest', function () {
        return gulp.src(sBase + '/*.html')
            .pipe(plugin.inject(gulp.src(sBase + '/chunk-manifest.json'), {
                starttag: '<!-- inject:manifest -->',
                transform: function (filePath, file) {
                    return '<script> window.webpackManifest=' + file.contents.toString('utf8') + '</script>';
                }
            }))
            .pipe(gulp.dest(sBase));
    });
}
