var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.warch("*.html").on("change", reload);
})