'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var DIST_PATH = 'dist';
var CSS_PATH = 'css/**/*.css';
var SCRIPTS_PATH = 'js/**/*.js';

gulp.task('hello', function() {
    console.log('Hello!');
});

// styles
gulp.task('styles', function() {
    console.log('starting styles task');
    return gulp.src([
        './css/normalize.css',
        './css/foundation.css',
        './css/arvo.css',
        './css/ubuntu.css',
        './css/basics.css',
        './css/menu.css',
        './css/hero.css',
        './css/photo-grid.css',
        './css/modals.css',
        './css/footer.css'
    ])
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(DIST_PATH));
});

// javascript
gulp.task('scripts', function() {
    console.log('starting scripts task');
    return gulp.src([
        './js/jquery.js',
        './js/fastclick.js',
        './js/foundation.js',
        './js/foundation.equalizer.js',
        './js/foundation.reveal.js',
        './js/scripts.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(DIST_PATH))
        .pipe(uglify())
        .pipe(gulp.dest(DIST_PATH));
});

gulp.task('default', ['hello', 'scripts', 'styles'], function() {
    console.log('This is the default task!');
});