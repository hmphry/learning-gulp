var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    smoosher = require('gulp-smoosher'),
    compressor = require('gulp-compressor');

var sassRoot = 'build/sass/',
    jsRoot = 'build/js/';

gulp.task('sass-to-css', function(){
    return gulp.src(sassRoot+'main.scss')
        .pipe(sass({sourcemap: true}))
        .pipe(prefix())
        .pipe(gulp.dest('public/css'));
});

gulp.task('concat-js', function() {
    gulp.src(jsRoot+'*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js/'))
});

gulp.task('watch-files', function(){
    gulp.watch(sassRoot+'**/*.scss', function(){
        gulp.start('sass-to-css');
    });
    gulp.watch(jsRoot+'*.js', function(){
        gulp.start('concat-js');
    });
});

gulp.task('min-html', function () {
    gulp.src('public/*.html')
        .pipe(smoosher())
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
        }))
        .pipe(gulp.dest('public/final'));
});
