const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const less = require('gulp-less');
const es = require('event-stream');
const gutil = require('gulp-util');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const transform = require('vinyl-transform');

const argv = require('yargs').argv;

gulp.task('styles', () => {
    return gulp.src('./assets/**/less/main.less')
        .pipe(less())
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log("before: " + details.name + ': ' + details.stats.originalSize);
            console.log("after : " + details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./target'));
});

gulp.task('browserify', () => {
    const browserify_files = [
        'index',
        'registry'
    ];
    const tasks = browserify_files.map((file) => {
        gutil.log(`browserify ${file}`);
        return browserify({ entries: `./assets/${file}/js/main.js`, debug: true })
        .transform(babelify, { presets: ["react", "es2015"] }).bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(`./target/${file}/js`));
    });
    return es.merge.apply(null, tasks);
});

gulp.task('copyHTML', () => {
    return gulp.src('./assets/**/index.html')
        .pipe(gulp.dest('./target'));
});

gulp.task('watch', ['styles', 'browserify', 'copyHTML'], () => {
    gutil.log(`watch task!`);
    gulp.watch('./assets/**/less/*.less', ['styles']);
    gulp.watch('./assets/**/js/**/*.js', ['browserify'])
    gulp.watch('./assets/**/index.html', ['copyHTML']);
});
 gulp.task('just-build', ['styles', 'browserify', 'copyHTML'], () => {
     gutil.log(`just build task!`);
 });

gulp.task('default', argv.watch !== undefined ? ['watch'] : ['just-build']);
