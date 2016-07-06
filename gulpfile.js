var gulp = require('gulp'),
  sass = require('gulp-sass'),
  ts   = require('gulp-typescript'),
  cleanCSS = require('gulp-clean-css'),
  prefix = require('gulp-autoprefixer');;



gulp.task('sass', function () {
  return gulp.src( './src/app/components/**/*.scss' )
    .pipe( gulp.dest( function( file ) {
      stylePath =  file.base;
      return file.base;
    } ))
    .pipe( sass() )
    .pipe(gulp.dest(function() { return stylePath; }))
});

gulp.task('globalCSS', function() {

  return gulp.src('./src/public/css/global/app.scss')
    .pipe(sass({ includePaths: ['scss'] }))
    .pipe(prefix(['last 3 versions', '> 1%'], { cascade: true }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./src/public/css/'))
});

gulp.task('typescript', function () {
  return gulp.src('./src/app/components/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      target: 'ES5',
      module: 'commonjs',
      removeComments: true,
      experimentalDecorators: true
    }))
    .pipe( gulp.dest( function( file ) {
      stylePath =  file.base;
      return file.base;
    } ))
    .pipe(gulp.dest(function() { return stylePath; }))
});


gulp.task('default', ['sass', 'typescript']);

gulp.task('watch', function() {
  gulp.watch('./src/app/components/**/*.scss', ['sass'])
  gulp.watch('./src/app/components/**/*.ts', ['typescript'])
  gulp.watch(['./src/public/css/global/',
    './src/public/css/global/**',
    '!./src/public/css/*.css'],
    ['globalCSS'])
  gulp.watch( ['./src/app/components/**/',
    '!./src/components/**/*.html'], [ 'typescript','sass' ] )
});
