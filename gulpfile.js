const gulp = require('gulp');
const watch = require('gulp-watch');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

let tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('compile-ts', () => tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write({ sourceRoot: '../src' }))
    .pipe(gulp.dest('dist')));
gulp.task('watch', ['compile-ts'], () => watch('src/**/*.ts', ['compile-ts']));
gulp.task('build', ['compile-ts']);
gulp.task('default', ['build']);