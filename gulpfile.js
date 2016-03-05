var
  gulp              = require('gulp'),
  browserSync       = require('browser-sync').create(),
  sass              = require('gulp-sass'),
  sourcemaps        = require('gulp-sourcemaps'),
  autoprefixer      = require('gulp-autoprefixer');
  header            = require('gulp-header');
  uglify            = require('gulp-uglify');
  concat            = require('gulp-concat');
  notify            = require('gulp-notify');
  gutil             = require('gulp-util');
  rename            = require('gulp-rename');
  pkg               = require('./package.json');
;

var reportError = function (error) {
  var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

  notify({
      title: 'Task Failed [' + error.plugin + ']',
      message: lineNumber + 'See console.',
      sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
  }).write(error);

  gutil.beep(); // Beep 'sosumi' again

  // Inspect the error object
  //console.log(error);

  // Easy error reporting
  //console.log(error.toString());

  // Pretty error reporting
  var report = '';
  var chalk = gutil.colors.white.bgRed;

  report += chalk('TASK:') + ' [' + error.plugin + ']\n';
  report += chalk('PROB:') + ' ' + error.message + '\n';
  if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
  if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
  console.error(report);

  // Prevent the 'watch' task from stopping
  this.emit('end');
}

var banner = [
  '/* <%= pkg.name %> - v<%= pkg.version %> */',
  ''
].join('\n');

// Static Server + watching scss/html files
gulp.task('dev', ['sass', 'dist'], function() {

  browserSync.init({
    server: {
      baseDir: "examples",
      routes: {
        "/dist": "dist"
      },
      directory: true
    }
  });
  
  gulp.watch("src/flipclock/scss/**/*.scss", ['sass']);
  gulp.watch("src/flipclock/js/**/*.js", ['dist']).on('change', browserSync.reload);
  gulp.watch("examples/*.html").on('change', browserSync.reload);
});

// Minify js files
gulp.task('dist', function () {
  return gulp.src([
      'src/flipclock/js/vendor/*.js',
      'src/flipclock/js/libs/Base.js',
      'src/flipclock/js/libs/Plugins.js',
      'src/flipclock/js/libs/List.js',
      'src/flipclock/js/libs/ListItem.js',
      'src/flipclock/js/libs/EnglishAlphaList.js',
      'src/flipclock/js/libs/*.js',
      'src/flipclock/js/faces/TwentyFourHourClockFace.js',
      'src/flipclock/js/faces/*.js',
      'src/flipclock/js/lang/*.js'
    ]) //select all javascript files 
    .pipe(concat('flipclock.js')) //the name of the resulting file
    .pipe(gulp.dest('dist')) //the destination folder
    .pipe(rename('flipclock.min.js')) //minify the compiled js
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg})) //add a small version banner to the minified js
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Finished minifying JavaScript'}));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/flipclock/scss/**/*.scss")
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', reportError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Styles recompiled'}));
});

gulp.task('default', ['dev']);