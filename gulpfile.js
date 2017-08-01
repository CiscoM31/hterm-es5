var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function() {
  return gulp.src([
      'src/polyfills.js',
      'src/hterm_all.js'
    ])
    .pipe($.babel({
      presets: ['es2015'],
      plugins: ['transform-object-assign'],
    }))
    .pipe($.uglify())
    .pipe($.concat('hterm.min.js'))
    .pipe(gulp.dest('dist'));
});