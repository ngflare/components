'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglifycss = require('gulp-uglifycss'),
  rename = require('gulp-rename');

gulp.task('build-css', function () {
  return gulp
    .src(['libs/components/src/lib/components/**/*.css'])
    .pipe(concat('ng-flare.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(rename('ng-flare.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-assets', gulp.series('build-css'));
