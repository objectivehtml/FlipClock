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
  rename            = require('gulp-rename');
  pkg               = require('./package.json');
;

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
    .pipe(rename('flipclock.min.js'))
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Finished minifying JavaScript'}));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/flipclock/scss/**/*.scss")
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['dev']);