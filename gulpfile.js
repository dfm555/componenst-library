var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src( './src/app/components/**/*.scss' )
    .pipe( gulp.dest( function( file ) {
      stylePath =  file.base;
      return file.base;
    } ))
    .pipe( sass() )
    .pipe(gulp.dest(function() { return stylePath; }))

});
gulp.task('default', ['sass']);
gulp.task('watch', function() {
  gulp.watch('./src/app/components/**/*.scss', ['sass'])
});
