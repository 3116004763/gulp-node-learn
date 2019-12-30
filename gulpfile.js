const gulp = require('gulp');

const gulpConnect = require('gulp-connect');

const cleanCss = require('gulp-clean-css');

const port = 8000

const buildBaseUrl = 'dist';
// const tmpBaseUrl = 'tmp';

const paths = {
  css: {
      src: 'src/css/**/*',
      dist: buildBaseUrl + '/css/',
      // tmp: tmpBaseUrl + '/css/'
  },
  js: {
      src: 'src/js/**/*.js',
      dist: buildBaseUrl + '/js/',
      // tmp: tmpBaseUrl + '/js/'
  },
  img: {
      src: 'src/images/**/*',
      dist: buildBaseUrl + '/images/',
      // tmp: tmpBaseUrl + '/images/'
  },
  html: {
      src: 'src/**/*.html',
      dist: buildBaseUrl + '/'
  }
};

function css() {
  return gulp.src(paths.css.src)
      .pipe(cleanCss())
      .pipe(gulp.dest(paths.css.dist))
      .pipe(gulpConnect.reload())
}

function html() {
  return gulp.src(paths.html.src)
      .pipe(gulp.dest(paths.html.dist))
      .pipe(gulpConnect.reload())
}

function js() {
  return gulp.src(paths.js.src)
      .pipe(gulp.dest(paths.js.dist))
      .pipe(gulpConnect.reload())
}

function connect() {
  return gulpConnect.server({
    host: 'localhost',
    port: port,
    name: 'my server',
    // preferHttp1 : true,
    // https : {allowHTTP1:true},
    livereload: true,
    https:true
  })
}

function watch() {
  // livereload.listen();
  gulp.watch(paths.css.src, gulp.series(css,js,html));
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.js.src, js);
}

const unit = gulp.parallel(gulp.series(css,js,html),watch,connect)

exports.default = unit
