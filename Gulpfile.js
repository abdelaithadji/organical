    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        minifyCss = require('gulp-minify-css'),
        bootlint  = require('gulp-bootlint'),
        browserSync = require('browser-sync').create();



        gulp.task('sass', function () {

            gulp.src('assets/stylesheets/scss/*.scss')
                .pipe(sass())
                .pipe(minifyCss())
                .pipe(gulp.dest('assets/stylesheets/css'))
                .pipe(browserSync.stream());
        });
        gulp.task('bootlint', function () {
            return gulp.src('./index.php')
                .pipe(bootlint());
        });
        gulp.task('modernizr', function () {
            gulp.src('assets/js/*.js')
                .pipe(modernizr())
                .pipe(gulp.dest('build/'))
        });
        gulp.task('bootlint', function() {
            return gulp.src('./index.html')
                .pipe(bootlint());
        });
        gulp.task('serve', ['sass'], function () {
            browserSync.init({
                proxy: 'localhost/www/jmbootstrap/'
            });
            gulp.watch('assets/stylesheets/scss/*.scss', ['sass']);
            gulp.watch("*.html").on('change', browserSync.reload);
        });

        gulp.task('default', ['serve']);
