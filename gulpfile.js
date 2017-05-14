var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(concat('app.css'))
        .pipe(rename({
          basename : 'app',
          extname : '.min.css'
    }))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./sass/*.scss',['sass']);
});
