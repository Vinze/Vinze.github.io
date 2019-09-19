var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-csso');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('build-css', function() {
    return gulp.src([
            'src/less/stylesheet.less',
        ])
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('build-js', function() {
    return gulp.src([
            'src/js/jquery.min.js',
            'src/js/app.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    livereload.listen();

    gulp.watch('src/less/*.less', gulp.parallel(['build-css']));
    gulp.watch('src/js/app.js', gulp.parallel(['build-js']));
});

gulp.task('default', gulp.series(['build-css', 'build-js', 'watch']));